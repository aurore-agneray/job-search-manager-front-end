import { configureStore } from "@reduxjs/toolkit";
import jobApplicationsReducer from "./jobApplicationsSlice";
import { api } from "../services/api";

export const store = configureStore({
    reducer: {
        jobApplications: jobApplicationsReducer,
        [api.reducerPath]: api.reducer // Add the API reducer here
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
