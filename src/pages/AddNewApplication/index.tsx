// import { Form } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import InputField from "../../components/InputField";
import { useDispatch } from "react-redux";
import { add } from "../../store/jobApplicationsSlice";
import { ApplicationType } from "../../types";
import { Form } from "react-bootstrap";
import { ApplicationStatusEnum } from "../../enums";
import { FormEvent } from "react";

export default function AddNewApplication() {
    const dispatch = useDispatch();
    const newApplication: ApplicationType = {
        Id: "POUET",
        Source: "",
        OfferUrl: "",
        Position: "",
        Place: "",
        Status: ApplicationStatusEnum.InPreparation
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit");
        const formData = new FormData(event.currentTarget);
        console.log(formData);
        event.preventDefault();
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        newApplication.Source = formData.get("formSource") + "";
        newApplication.OfferUrl = formData.get("formOfferUrl") + "";
        newApplication.Position = formData.get("formPosition") + "";
        newApplication.Place = formData.get("formPlace") + "";

        dispatch(add(newApplication));
    };

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
                <Form onSubmit={handleSubmit}>
                    <h2>Ajout d'une nouvelle candidature</h2>
                    <Row>
                        <Col xs={6}>
                            <InputField
                                ControlId="formDate"
                                Label="Date de candidature"
                                Type="date"
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
                </Form>
            </Container>
        </>
    );
}
