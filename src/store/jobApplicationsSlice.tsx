import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationStatusType, ApplicationType } from "../types";
import { getAllStatuses } from "../services/statuses-services";
import { getAllApplications } from "../services/applications-services";

export interface JobApplicationsState {
    List: ApplicationType[];
    AvailableStatuses: ApplicationStatusType[];
}

// Directly initialized with API calls
const initialState: JobApplicationsState = {
    List: await getAllApplications(),
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
        add: (
            state,
            action: PayloadAction<ApplicationType | ApplicationType[]>
        ) => {
            const currentList = state.List;
            state.List = [
                ...currentList,
                ...(Array.isArray(action.payload)
                    ? action.payload
                    : [action.payload])
            ];
        },
        update: (state, action: PayloadAction<ApplicationType>) => {
            const currentList = state.List;
            state.List = currentList.map((jobApp) =>
                jobApp.id === action?.payload.id ? action.payload : jobApp
            );
        },
        update: (state, action: PayloadAction<ApplicationType>) => {
            const currentList = state.List;
            state.List = currentList.map((jobApp) =>
                jobApp.id === action?.payload.id ? action.payload : jobApp
            );
        },
        // I WANTED TO USE THE NAME "delete" BUT IT PROVOKED A STATIC ERROR !
        erase: (state, action: PayloadAction<string>) => {
            const currentList = state.List;
            state.List = [
                ...currentList.filter((jobApp) => jobApp.id !== action?.payload)
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
export const { add, update, erase } = jobApplicationsSlice.actions;
export const { getAll, getById } = jobApplicationsSlice.selectors;

export default jobApplicationsSlice.reducer;
