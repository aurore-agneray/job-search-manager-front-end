import { useFormikContext } from "formik";
import { useEffect } from "react";

/**
 * Scrolls the page to the first error message when the form is submitting.
 * Usable only inside a Formik form.
 * @returns a null component
 */
export default function ScrollToError() {
    const formik = useFormikContext();
    const submitting = formik?.isSubmitting;

    useEffect(() => {
        const el = document.querySelector(".error-message");
        (el?.parentElement ?? el)?.scrollIntoView();
    }, [submitting]);

    return null;
}
