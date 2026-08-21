/********************************
 ** EXTERNAL LIBRARIES IMPORTS **
 *******************************/
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { Field, Formik, FormikHelpers } from "formik";

/****************************
 ** INTERNAL TOOLS IMPORTS **
 ***************************/
import { RootState } from "../../store/index.tsx";
import {
    add,
    getById as getApplicationById,
    update
} from "../../store/jobApplicationsSlice.tsx";
import {
    FormApplicationType,
    PostApplicationType,
    SelectOptionType
} from "../../types.tsx";
import {
    postOneApplication,
    updateOneApplication
} from "../../services/applications-services.ts";
import FrText from "../../texts/fr.ts";
import { RoutePathEnum } from "../../enums.tsx";

/*********************************
 ** INTERNAL COMPONENTS IMPORTS **
 ********************************/
import RequiredAsterisk from "../../components/RequiredAsterisk/index.tsx";
import InputField from "../../components/InputField/index.tsx";
import ScrollToTop from "../../components/ScrollToTop/index.tsx";
import ScrollToError from "../../components/ScrollToError/index.tsx";

/************************************
 ** HELPERS DEDICATED TO THIS PAGE **
 ***********************************/
import {
    getInitialFormValues,
    getSpecificTexts,
    yupValidationSchema
} from "./helpers.tsx";

const FormRow = styled(Row)`
    padding: 0.8rem 0rem;
`;

/** AddNewApplication page
 * -------------------------
 * Dislays and manage the form used to add a new job application into the database
 */
export default function AddNewApplication() {
    const store = useStore<RootState>();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    const existingApplication = useSelector((state: RootState) =>
        isEditMode ? getApplicationById(state, id) : undefined
    );

    const [displayForm, setDisplayForm] = useState(true);
    const [statuses] = useState(
        store.getState().jobApplications.AvailableStatuses
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isEditMode && existingApplication === undefined) {
            navigate(RoutePathEnum.NotFound, { replace: true });
        }
    }, [existingApplication, isEditMode, navigate]);

    const specificTexts = getSpecificTexts(isEditMode);

    /**
     * Function to handle the form submission
     * @param values The values entered into the form
     * @param setSubmitting The function to set the submitting state of the form, required by Formik
     */
    const handleSubmit = async (
        values: FormApplicationType,
        { setSubmitting }: FormikHelpers<FormApplicationType>
    ) => {
        const futureJobAppplication: PostApplicationType = {
            date: values.formDate,
            source: values.formSource,
            isSpontaneous: values.formIsSpontaneous,
            isFromMyInitiative: values.formIsFromMyInitiative,
            offerUrl: values.formOfferUrl,
            position: values.formPosition,
            place: values.formPlace,
            statusId: values.formStatus,
            motivations: values.formMotivations,
            notes: values.formNotes,
            contacts: values.formContacts,
            feelingLevel: 0
        };

        try {
            if (isEditMode && existingApplication !== undefined) {
                const updatedJobApplication = await updateOneApplication(
                    existingApplication.id,
                    futureJobAppplication
                );

                dispatch(update(updatedJobApplication));

                setTimeout(
                    () =>
                        navigate(
                            `${RoutePathEnum.DisplayApplication}/${existingApplication.id}`
                        ),
                    2500
                );
            } else {
                const newJobApplication = await postOneApplication(
                    futureJobAppplication
                );

                dispatch(add(newJobApplication));

                setTimeout(() => navigate(RoutePathEnum.Home), 2500);
            }

            setSubmitting(false);
            setDisplayForm(false);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Container>
            {displayForm && (
                <Formik
                    key={isEditMode ? id : "new"}
                    validationSchema={yupValidationSchema}
                    onSubmit={handleSubmit}
                    initialValues={getInitialFormValues(existingApplication)}
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
                            <ScrollToError />
                            <h2>{specificTexts.pageTitle}</h2>
                            <FormRow>
                                <Col xs={6}>
                                    <InputField
                                        ControlId="formDate"
                                        Label={
                                            FrText.AddNewApplication
                                                .ApplicationDate
                                        }
                                        Type="date"
                                        Value={values.formDate}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <InputField
                                        ControlId="formStatus"
                                        Label={FrText.AddNewApplication.Status}
                                        Type="select"
                                        Value={values.formStatus}
                                        OnChange={handleChange}
                                        OnBlur={handleBlur}
                                        Required
                                        ErrorMessage={errors.formStatus}
                                        Touched={touched.formStatus}
                                        SelectOptions={statuses.map<SelectOptionType>(
                                            (status) => {
                                                return {
                                                    value: status.id,
                                                    label: status.name
                                                };
                                            }
                                        )}
                                    />
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col>
                                    <FormCheckLabel htmlFor="formIsFromMyInitiative">
                                        {
                                            FrText.AddNewApplication
                                                .FromMyInitiative
                                        }
                                    </FormCheckLabel>
                                    <Field
                                        type="checkbox"
                                        id="formIsFromMyInitiative"
                                        name="formIsFromMyInitiative"
                                    />
                                </Col>
                                <Col>
                                    <FormCheckLabel htmlFor="formIsSpontaneous">
                                        {FrText.AddNewApplication.Spontaneous}
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
                                        Label={FrText.AddNewApplication.Source}
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
                                        Label={
                                            FrText.AddNewApplication.OfferUrl
                                        }
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
                                        Label={
                                            FrText.AddNewApplication.Position
                                        }
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
                                        Label={FrText.AddNewApplication.Place}
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
                                        Label={
                                            FrText.AddNewApplication.Motivations
                                        }
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
                                        Label={FrText.AddNewApplication.Notes}
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
                                        Label={
                                            FrText.AddNewApplication.Contacts
                                        }
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
                                        {
                                            FrText.AddNewApplication
                                                .MandatoryFieldsInfo
                                        }{" "}
                                        (<RequiredAsterisk />)
                                    </span>
                                </Col>
                                <Col style={{ textAlign: "right" }}>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                    >
                                        {
                                            FrText.AddNewApplication
                                                .ValidationButton
                                        }
                                    </Button>
                                </Col>
                            </FormRow>
                        </Form>
                    )}
                </Formik>
            )}
            {!displayForm && (
                <Row>
                    <ScrollToTop />
                    <Col style={{ marginTop: "30px", textAlign: "center" }}>
                        <h2>{specificTexts.successMessage}</h2>
                        <p>{specificTexts.redirectionMessage}</p>
                    </Col>
                </Row>
            )}
        </Container>
    );
}
