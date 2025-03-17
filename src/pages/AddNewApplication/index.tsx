import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputField from "../../components/InputField";
import { useDispatch } from "react-redux";
import { add } from "../../store/jobApplicationsSlice";
import { ApplicationType } from "../../types";
import { Form } from "react-bootstrap";
import { ApplicationStatusEnum } from "../../enums";
import { FormEvent, useState } from "react";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { useNavigate } from "react-router-dom";
import RequiredAsterisk from "../../components/RequiredAsterisk";

const FormRow = styled(Row)`
    padding: 0.8rem 0rem;
`;

export default function AddNewApplication() {
    const [displayForm, setDisplayForm] = useState(true);
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newApplication: ApplicationType = {
        Id: "POUET",
        Source: "",
        OfferUrl: "",
        Position: "",
        Place: "",
        Status: ApplicationStatusEnum.InPreparation,
        IsSpontaneous: false,
        IsFromMyInitiative: false,
        FeelingLevel: 0
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        setValidated(true);

        const formData = new FormData(form);
        event.preventDefault();
        // for (const [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }

        newApplication.Date = formData.get("formDate") + "";
        newApplication.Source = formData.get("formSource") + "";
        newApplication.IsSpontaneous =
            formData.get("formIsSpontaneous") + "" === "on";
        newApplication.IsFromMyInitiative =
            formData.get("formIsFromMyInitiative") + "" === "on";
        newApplication.OfferUrl = formData.get("formOfferUrl") + "";
        newApplication.Position = formData.get("formPosition") + "";
        newApplication.Place = formData.get("formPlace") + "";
        newApplication.Motivations = formData.get("formMotivations") + "";
        newApplication.Notes = formData.get("formNotes") + "";
        newApplication.Contacts = formData.get("formContacts") + "";

        dispatch(add(newApplication));
        setDisplayForm(false);

        setTimeout(() => navigate("/"), 2500);
    };

    return (
        <Container>
            {displayForm && (
                <Form
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <h2>Ajout d'une nouvelle candidature</h2>
                    <FormRow>
                        <Col xs={6}>
                            <InputField
                                ControlId="formDate"
                                Label="Date de candidature"
                                Type="date"
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <FormCheckLabel htmlFor="formIsFromMyInitiative">
                                De mon initiative
                            </FormCheckLabel>
                            <Form.Check
                                type="switch"
                                id="formIsFromMyInitiative"
                                name="formIsFromMyInitiative"
                            />
                        </Col>
                        <Col>
                            <FormCheckLabel htmlFor="formIsSpontaneous">
                                Candidature spontanée
                            </FormCheckLabel>
                            <Form.Check
                                type="switch"
                                id="formIsSpontaneous"
                                name="formIsSpontaneous"
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <InputField
                                ControlId="formSource"
                                Label="Source"
                                Required={true}
                            />
                        </Col>
                        <Col>
                            <InputField
                                ControlId="formOfferUrl"
                                Label="Url de l'offre"
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <InputField
                                ControlId="formPosition"
                                Label="Intitulé du poste"
                                Required={true}
                            />
                        </Col>
                        <Col>
                            <InputField
                                ControlId="formPlace"
                                Label="Lieu"
                                Required={true}
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <InputField
                                ControlId="formMotivations"
                                Label="Mes motivations"
                                Type="textarea"
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <InputField
                                ControlId="formNotes"
                                Label="Mes notes"
                                Type="textarea"
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <InputField
                                ControlId="formContacts"
                                Label="Mes contacts"
                                Type="textarea"
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col>
                            <span
                                style={{ color: "gray", fontSize: "smaller" }}
                            >
                                Champs obligatoires marqués d'un{" "}
                                <RequiredAsterisk />
                            </span>
                        </Col>
                        <Col style={{ textAlign: "right" }}>
                            <Button
                                variant="primary"
                                type="submit"
                                size="lg"
                            >
                                Valider
                            </Button>
                        </Col>
                    </FormRow>
                </Form>
            )}
            {!displayForm && (
                <Row>
                    <Col style={{ marginTop: "30px", textAlign: "center" }}>
                        <h2>Candidature ajoutée avec succès !</h2>
                        <p>
                            Vous allez être redirigé vers la liste des
                            candidatures dans quelques secondes :)
                        </p>
                    </Col>
                </Row>
            )}
        </Container>
    );
}
