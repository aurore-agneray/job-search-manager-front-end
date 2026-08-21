import { useFormikContext } from "formik";
import { useEffect } from "react";

import { QUERY_SELECTOR_FORMIK_ERRORS } from "../../utils/constants.ts";

/**
 * Scrolls the page to the first error message when the form is submitting.
 * Usable only inside a Formik form.
 * @returns a null component
 */
export default function ScrollToError() {
    const formik = useFormikContext();
    const submitting = formik?.isSubmitting;

    useEffect(() => {
        const el = document.querySelector(QUERY_SELECTOR_FORMIK_ERRORS);
        (el?.parentElement ?? el)?.scrollIntoView();
    }, [submitting]);

    return null;
}
