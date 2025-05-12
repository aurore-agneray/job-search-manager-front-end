import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function displayError(
    errorMessage: FetchBaseQueryError | SerializedError | undefined
) {
    alert(errorMessage);
    console.error(errorMessage);
}
