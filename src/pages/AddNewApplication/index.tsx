import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputField from "../../components/InputField";
import { useDispatch } from "react-redux";
import { add } from "../../store/jobApplicationsSlice";
import { FormApplicationType } from "../../types";
import { ApplicationStatusEnum } from "../../enums";
import { useState } from "react";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { useNavigate } from "react-router-dom";
import RequiredAsterisk from "../../components/RequiredAsterisk";
import { Field, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

const REQUIRED_FIELD_ERROR_MESSAGE = "Veuillez saisir une valeur";
const URL_FORMAT_ERROR_MESSAGE = "Le format de l'url saisie est incorrect";

const FormRow = styled(Row)`
    padding: 0.8rem 0rem;
`;

const yupValidationSchema = Yup.object({
    formSource: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
    formOfferUrl: Yup.string().url(URL_FORMAT_ERROR_MESSAGE),
    formPosition: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
    formPlace: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE)
});

export default function AddNewApplication() {
    const [displayForm, setDisplayForm] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (
        values: FormApplicationType,
        { setSubmitting }: FormikHelpers<FormApplicationType>
    ) => {
        console.log(values);

        dispatch(
            add({
                Id: "POUET",
                Date: values.formDate,
                Source: values.formSource,
                IsSpontaneous: values.formIsSpontaneous,
                IsFromMyInitiative: values.formIsFromMyInitiative,
                OfferUrl: values.formOfferUrl,
                Position: values.formPosition,
                Place: values.formPlace,
                Status: ApplicationStatusEnum.InPreparation,
                Motivations: values.formMotivations,
                Notes: values.formNotes,
                Contacts: values.formContacts,
                FeelingLevel: 0
            })
        );

        setSubmitting(false);
        setDisplayForm(false);
        setTimeout(() => navigate("/"), 2500);
    };

    return (
        <Container>
            {displayForm && (
                <Formik
                    validationSchema={yupValidationSchema}
                    onSubmit={handleSubmit}
                    initialValues={{
                        formDate: "",
                        formIsFromMyInitiative: false,
                        formIsSpontaneous: false,
                        formSource: "",
                        formOfferUrl: "",
                        formPosition: "",
                        formPlace: "",
                        formMotivations: "",
                        formNotes: "",
                        formContacts: ""
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        touched,
                        errors
                    }) => (
                        <Form
                            noValidate
                            onSubmit={handleSubmit}
                        >
                            <h2>Ajout d'une nouvelle candidature</h2>
                            <FormRow>
                                <Col xs={6}>
                                    <InputField
                                        ControlId="formDate"
                                        Label="Date de candidature"
                                        Type="date"
                                        Value={values.formDate}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <FormCheckLabel htmlFor="formIsFromMyInitiative">
                                        De mon initiative
                                    </FormCheckLabel>
                                    <Field
                                        type="checkbox"
                                        id="formIsFromMyInitiative"
                                        name="formIsFromMyInitiative"
                                    />
                                </Col>
                                <Col>
                                    <FormCheckLabel htmlFor="formIsSpontaneous">
                                        Candidature spontan�e
                                    </FormCheckLabel>
                                    <Field
                                        type="checkbox"
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
                                        Value={values.formSource}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                        ErrorMessage={errors.formSource}
                                        Touched={touched.formSource}
                                    />
                                </Col>
                                <Col>
                                    <InputField
                                        ControlId="formOfferUrl"
                                        Label="Url de l'offre"
                                        Value={values.formOfferUrl}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                        ErrorMessage={errors.formOfferUrl}
                                        Touched={touched.formOfferUrl}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <InputField
                                        ControlId="formPosition"
                                        Label="Intitulé du poste"
                                        Required={true}
                                        Value={values.formPosition}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                        ErrorMessage={errors.formPosition}
                                        Touched={touched.formPosition}
                                    />
                                </Col>
                                <Col>
                                    <InputField
                                        ControlId="formPlace"
                                        Label="Lieu"
                                        Required={true}
                                        Value={values.formPlace}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                        ErrorMessage={errors.formPlace}
                                        Touched={touched.formPlace}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <InputField
                                        ControlId="formMotivations"
                                        Label="Mes motivations"
                                        Type="textarea"
                                        Value={values.formMotivations}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <InputField
                                        ControlId="formNotes"
                                        Label="Mes notes"
                                        Type="textarea"
                                        Value={values.formNotes}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <InputField
                                        ControlId="formContacts"
                                        Label="Mes contacts"
                                        Type="textarea"
                                        Value={values.formContacts}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <span
                                        style={{
                                            color: "gray",
                                            fontSize: "smaller"
                                        }}
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
                </Formik>
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
