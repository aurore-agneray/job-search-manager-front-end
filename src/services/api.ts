import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "../utils/env-variables";

const apiBaseUrl = getApiBaseUrl();

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
    tagTypes: [
        "JobApplications",
        "PostedJobApplication",
        "DeletedJobApplication",
        "Statuses"
    ],
    /**
     * This api has endpoints injected in adjacent files,
     * which is why no endpoints are shown below.
     * If you want all endpoints defined in the same file, they could be included here instead
     */
    endpoints: () => ({})
});
