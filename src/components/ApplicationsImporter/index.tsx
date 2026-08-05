import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";

import { handleFileChange, handleUploadClick } from "./handlers";
import Loader from "../Loader";

/**
 * ApplicationsImporter
 * -------------------------------
 * @returns a file input field and a button dedicated to import new applications from an Excel file
 */
export default function ApplicationsImporter() {
    const [file, setFile] = useState<File>();
    const [showLoader, setShowLoader] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <Row>
                <Form.Label>
                    Import de candidatures depuis un fichier Excel (.xlsx)
                </Form.Label>
            </Row>
            <Row style={{ alignItems: "flex-end" }}>
                <Col
                    xs={6}
                    sm={8}
                    lg={9}
                >
                    <Form.Control
                        type="file"
                        onChange={(e) =>
                            handleFileChange(
                                e as ChangeEvent<HTMLInputElement>,
                                setFile
                            )
                        }
                    />
                </Col>
                <Col
                    xs={6}
                    sm={4}
                    lg={3}
                >
                    <Button
                        variant="primary"
                        onClick={() =>
                            handleUploadClick(file, setShowLoader, dispatch)
                        }
                    >
                        Lancer import
                    </Button>
                    {showLoader && <Loader />}
                </Col>
            </Row>
            <Row>
                <div>{file && `${file.name}`}</div>
            </Row>
        </>
    );
}
