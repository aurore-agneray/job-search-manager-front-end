import * as Yup from "yup";
import { ApplicationType } from "../../types.tsx";
import FrText from "../../texts/fr.ts";

export const REQUIRED_FIELD_ERROR_MESSAGE =
    FrText._General.Error.RequiredFieldErrorMessage;
export const URL_FORMAT_ERROR_MESSAGE =
    FrText._General.Error.UrlFormatErrorMessage;

/**
 * Form validation schema using Yup
 * https://yup-docs.vercel.app/docs/schema
 */
export const yupValidationSchema = Yup.object({
    formSource: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
    formOfferUrl: Yup.string().url(URL_FORMAT_ERROR_MESSAGE),
    formPosition: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
    formPlace: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
    formStatus: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE)
});

/**
 * getInitialFormValues()
 * ------------------------
 * Returns the initial values for the form fields based on an existing application or default values.
 * @param existingApplication The existing application data, if any.
 * @returns An object containing the initial form values.
 */
export function getInitialFormValues(
    existingApplication: ApplicationType | undefined
) {
    return {
        formDate: existingApplication?.date ?? "",
        formIsFromMyInitiative:
            existingApplication?.isFromMyInitiative ?? false,
        formIsSpontaneous: existingApplication?.isSpontaneous ?? false,
        formSource: existingApplication?.source ?? "",
        formOfferUrl: existingApplication?.offerUrl ?? "",
        formPosition: existingApplication?.position ?? "",
        formPlace: existingApplication?.place ?? "",
        formStatus: existingApplication?.statusId ?? "",
        formMotivations: existingApplication?.motivations ?? "",
        formNotes: existingApplication?.notes ?? "",
        formContacts: existingApplication?.contacts ?? ""
    };
}

/**
 * getSpecificTexts()
 * ------------------------
 * Returns specific texts for the page based on whether it's in edit mode or not.
 * @param isEditMode A boolean indicating if the page is in edit mode.
 * @returns An object containing the page title, success message, and redirection message.
 */
export function getSpecificTexts(isEditMode: boolean) {
    return {
        pageTitle: isEditMode
            ? FrText.UpdateApplication.Title
            : FrText.AddNewApplication.Title,
        successMessage: isEditMode
            ? FrText.UpdateApplication.SuccessMessage
            : FrText.AddNewApplication.SuccessMessage,
        redirectionMessage: isEditMode
            ? FrText.UpdateApplication.RedirectionMessage
            : FrText.AddNewApplication.RedirectionMessage
    };
}
