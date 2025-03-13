// import { Form } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import InputField from "../../components/InputField";

export default function AddNewApplication() {
    return (
        <>
            <style>
                {`
                .new-application-btn-col {
                    text-align: right;
                }
            `}
            </style>
            <Container>
                {/* <Form
            method="post"
            action="/api/add-application"
        > */}
                <h2>Ajout d'une nouvelle candidature</h2>
                <Row>
                    <Col xs={6}>
                        <InputField
                            ControlId="formDate"
                            Label="Date de candidature"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputField
                            ControlId="formSource"
                            Label="Source"
                        />
                    </Col>
                    <Col>
                        <InputField
                            ControlId="formOfferUrl"
                            Label="Url de l'offre"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputField
                            ControlId="formPositionName"
                            Label="Intitulé du poste"
                        />
                    </Col>
                    <Col>
                        <InputField
                            ControlId="formPlace"
                            Label="Lieu"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputField
                            ControlId="formMotivations"
                            Label="Mes motivations"
                            Type="textarea"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputField
                            ControlId="formNotes"
                            Label="Mes notes"
                            Type="textarea"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="new-application-btn-col">
                        <Button
                            variant="primary"
                            type="submit"
                            size="lg"
                        >
                            Valider
                        </Button>
                    </Col>
                </Row>

                {/* </Form> */}
            </Container>
        </>
    );
}
