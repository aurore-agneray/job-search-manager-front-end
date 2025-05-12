import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ApplicationStatusType, ApplicationType } from "../types";
import { useGetAllApplicationsQuery } from "../services/applications-services";
import { getAllStatuses } from "../services/statuses-services";
import { displayError } from "../utils/common";

export interface JobApplicationsState {
    List: ApplicationType[];
    AvailableStatuses: ApplicationStatusType[];
}

// Directly initialized with API calls
const { data, error } = useGetAllApplicationsQuery();

if (error) {
    let displayedData;

    if (error as FetchBaseQueryError) {
        displayedData = error.data;
    }
    displayError(error.data || error);
    throw new Error(JSON.stringify(error.data));
}

const initialState: JobApplicationsState = {
    List: data || [],
    AvailableStatuses: await getAllStatuses()
};

/**
 * jobApplicationsSlice
 * ------------------------
 * Manages the state of what concern directly the job applications.
 * So the job applications list and the available statuses.
 */
export const jobApplicationsSlice = createSlice({
    name: "jobApplications",
    initialState,
    // Actions that can be called by the dispatch command
    reducers: {
        add: (state, action: PayloadAction<ApplicationType>) => {
            const currentList = state.List;
            state.List = [...currentList, action.payload];
        },
        // I WANTED TO USE THE NAME "delete" BUT IT PROVOKED A STATIC ERROR !
        erase: (state, action: PayloadAction<string>) => {
            const currentList = state.List;
            state.List = [
                ...currentList.filter((jobApp) => jobApp.id !== action.payload)
            ];
        }
    },
    // Getters that can be called by the useSelector hook
    selectors: {
        getAll: (state: JobApplicationsState) => state.List,
        getById: (state: JobApplicationsState, id: string | undefined) =>
            state.List.find((applic: ApplicationType) => applic.id === id)
    }
});

// Action creators are automatically generated for each case reducer function
export const { add, erase } = jobApplicationsSlice.actions;
export const { getAll, getById } = jobApplicationsSlice.selectors;

export default jobApplicationsSlice.reducer;
