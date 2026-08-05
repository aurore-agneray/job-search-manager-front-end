import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { UnknownAction } from "@reduxjs/toolkit/react";

import { importApplicationsFromExcel } from "../../services/applications-services";

import { ApiResponse, ImportApiResponse } from "../../types";
import Texts from "../../texts/fr";
import { add } from "../../store/jobApplicationsSlice";

/**
 * handleFileChange
 * --------------------------------
 * @param e : represents the event triggered when a file is selected in the file input field
 * @param setFile : a function to update the state of the selected file into the calling component
 */
export const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: Dispatch<SetStateAction<File | undefined>>
) => {
    if (e.target.files) {
        setFile(e.target.files[0]);
    }
};

/**
 * handleUploadClick
 * --------------------------------
 * @param file : the file to be uploaded
 * @param setShowLoader : a function to update the state of the loader visibility into the calling component
 * @param dispatch : a function to dispatch actions to the Redux store
 */
export const handleUploadClick = async (
    file: File | undefined,
    setShowLoader: Dispatch<SetStateAction<boolean>>,
    dispatch: Dispatch<UnknownAction>
) => {
    if (!file) {
        return;
    }

    setShowLoader(true);
    const response = await importApplicationsFromExcel(file);
    setShowLoader(false);

    setTimeout(() => {
        if (response.status === 200) {
            const importResponse = response as ImportApiResponse;
            alert(
                Texts.ApplicationsImporter.SuccessMessage.replace(
                    "$COUNT$",
                    importResponse.data.count.toString()
                )
            );

            setTimeout(() => {
                dispatch(add(importResponse.data.insertedJobApps));
            }, 100);
        } else {
            const failedImportResponse = response as ApiResponse;
            alert(
                Texts.ApplicationsImporter.FailureMessage +
                    " " +
                    failedImportResponse.message
            );
        }
    }, 100);
};
