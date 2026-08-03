import { ChangeEvent, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

import { importApplicationsFromExcel } from "../../services/applications-services";
import Loader from "../Loader";
import Texts from "../../texts/fr";

/**
 * ApplicationsImporter
 * -------------------------------
 * @returns a file input field and a button dedicated to import new applications from an Excel file
 */
export default function ApplicationsImporter() {
    const [file, setFile] = useState<File>();
    const [showLoader, setShowLoader] = useState(false);

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
                alert(
                    Texts.ApplicationsImporter.SuccessMessage.replace(
                        "$COUNT$",
                        response.message
                    )
                );
                setTimeout(() => {
                    window.location.reload();
                }, 1200);
            } else {
                alert(
                    Texts.ApplicationsImporter.FailureMessage +
                        " " +
                        response.message
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
