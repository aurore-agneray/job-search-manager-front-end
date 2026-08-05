import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form } from "react-bootstrap";

import { add } from "../../store/jobApplicationsSlice";

import { importApplicationsFromExcel } from "../../services/applications-services";
import Loader from "../Loader";
import Texts from "../../texts/fr";
import { ApiResponse, ImportApiResponse } from "../../types";

/**
 * ApplicationsImporter
 * -------------------------------
 * @returns a file input field and a button dedicated to import new applications from an Excel file
 */
export default function ApplicationsImporter() {
    const [file, setFile] = useState<File>();
    const [showLoader, setShowLoader] = useState(false);
    const dispatch = useDispatch();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = async () => {
        if (!file) {
            return;
        }

        setShowLoader(true);
        const response = await importApplicationsFromExcel(file);
        setShowLoader(false);

        setTimeout(() => {
            if (response.status === 200) {
                const importResponse = response as ImportApiResponse;
                alert(
                    Texts.ApplicationsImporter.SuccessMessage.replace(
                        "$COUNT$",
                        importResponse.data.count.toString()
                    )
                );

                setTimeout(() => {
                    dispatch(add(importResponse.data.insertedJobApps));
                }, 100);
            } else {
                const failedImportResponse = response as ApiResponse;
                alert(
                    Texts.ApplicationsImporter.FailureMessage +
                        " " +
                        failedImportResponse.message
                );
            }
        }, 100);
    };

    return (
        <div>
            <Col lg={9}>
                <Form.Label>
                    Import de candidatures depuis un fichier Excel (.xlsx)
                </Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleFileChange}
                />
                <div>{file && `${file.name} - ${file.type}`}</div>
            </Col>
            <Col lg={3}>
                <Button
                    variant="primary"
                    onClick={handleUploadClick}
                >
                    Lancer import
                </Button>
                {showLoader && <Loader />}
            </Col>
        </div>
    );
}
