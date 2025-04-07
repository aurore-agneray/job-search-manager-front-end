import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationStatusType, ApplicationType } from "../types";
import {
    getAvailableStatuses,
    getAllApplications
} from "../services/applications-services";

export interface JobApplicationsState {
    List: ApplicationType[];
    AvailableStatuses: ApplicationStatusType[];
}

const initialState: JobApplicationsState = {
    List: await getAllApplications(),
    AvailableStatuses: await getAvailableStatuses()
};

export const jobApplicationsSlice = createSlice({
    name: "jobApplications",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ApplicationType>) => {
            const currentList = state.List;
            state.List = [...currentList, action.payload];
        }
    },
    selectors: {
        getAll: (state: JobApplicationsState) => state.List,
        getById: (state: JobApplicationsState, id: string | undefined) =>
            state.List.find((applic: ApplicationType) => applic.id === id)
    }
});

// Action creators are generated for each case reducer function
export const { add } = jobApplicationsSlice.actions;
export const { getAll, getById } = jobApplicationsSlice.selectors;

export default jobApplicationsSlice.reducer;
