import { ApplicationType, PostApplicationType } from "../types";

import { getApiBaseUrl } from "../utils/env-variables";

const apiBaseUrl = getApiBaseUrl();

/**
 * getAllApplications()
 * ------------------------
 * Calls the API GET request *${apiBaseUrl}/jobapplications*
 * @returns a Promise<ApplicationType[]> whose array contains ApplicationType objects if
 * there aren't any errors, or an empty array
 */
export async function getAllApplications(): Promise<ApplicationType[]> {
    return await fetch(`${apiBaseUrl}/jobapplications`)
        .then((response) => response.json())
        .then((applicationsJson) => {
            return applicationsJson as ApplicationType[];
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}

/**
 * postOneApplication()
 * ------------------------
 * Calls the API POST request *${apiBaseUrl}/jobapplication*
 * @param jobApplication data sent to the server to save the new application
 * @returns a Promise<ApplicationType> whose response is the created object if
 * there aren't any errors, or throw an error with the failing validation
 * details returned by the server
 */
export async function postOneApplication(
    jobApplication: PostApplicationType
): Promise<ApplicationType> {
    return await fetch(`${apiBaseUrl}/jobapplication`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jobApplication)
    })
        .then((response) => response.json())
        .then((applicationJson) => {
            if (applicationJson.status === 400) {
                throw new Error(
                    Object.keys(applicationJson.errors)
                        .map((key) => `${key} : ${applicationJson.errors[key]}`)
                        .join(", ")
                );
            }

            return applicationJson as ApplicationType;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
}
