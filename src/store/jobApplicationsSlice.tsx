import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationType } from "../types";
import { getAllApplications } from "../services/applications-services";

export interface JobApplicationsState {
    List: ApplicationType[];
}

const initialState: JobApplicationsState = {
    List: getAllApplications()
};

export const jobApplicationsSlice = createSlice({
    name: "jobApplications",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ApplicationType>) => {
            const currentList = state.List;
            state.List = [...currentList, action.payload];
        }
    }
});

// Action creators are generated for each case reducer function
export const { add } = jobApplicationsSlice.actions;

export default jobApplicationsSlice.reducer;
