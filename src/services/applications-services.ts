import {
    ApiResponse,
    ApplicationType,
    ImportApiResponse,
    PostApplicationType
} from "../types";
import { getApiBaseUrl } from "../utils/env-variables";
import FrText from "../texts/fr";
import { ANTIFORGERY_TOKEN_HEADER } from "../utils/constants";
import { APISubRouteEnum } from "../enums";

const apiBaseUrl = getApiBaseUrl();

/**
 * processPostOrPutApplicationRequest()
 * ------------------------
 * Calls the API with the given URL and method (POST or PUT) to create or update a job application
 * @param url the API endpoint to send the request to
 * @param method the HTTP method to use for the request (POST or PUT)
 * @param jobApplication data sent to the server to save the new application
 * @returns a Promise<ApplicationType> whose response is the created / updated object if
 * there aren't any errors, or throw an error with the failing validation
 * details returned by the server
 */
async function processPostOrPutApplicationRequest(
    url: string,
    method: string,
    jobApplication: PostApplicationType
): Promise<ApplicationType> {
    if (url === "" || method === "") {
        throw new Error(FrText._General.InternalError.RequiredUrlAndMethod);
    }

    if (method !== "POST" && method !== "PUT") {
        throw new Error(FrText._General.InternalError.MethodMustBePostOrPut);
    }

    return await fetch(url, {
        method: method,
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

/**
 * getAllApplications()
 * ------------------------
 * Calls the API GET request *${apiBaseUrl}/jobapplications*
 * @returns a Promise<ApplicationType[]> whose array contains ApplicationType objects if
 * there aren't any errors, or an empty array
 */
export async function getAllApplications(): Promise<ApplicationType[]> {
    return await fetch(`${apiBaseUrl}/${APISubRouteEnum.JobApplications}`)
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
    return await processPostOrPutApplicationRequest(
        `${apiBaseUrl}/jobapplication`,
        "POST",
        jobApplication
    );
}

/**
 * updateOneApplication()
 * ------------------------
 * Calls the API PUT request *${apiBaseUrl}/jobapplication?id=[job_app_ID]*
 * @param id the ID of the job application to update
 * @param jobApplication data sent to the server to update the existing application
 * @returns a Promise<ApplicationType> whose response is the updated object if
 * there aren't any errors, or throw an error with the failing validation
 * details returned by the server
 */
export async function updateOneApplication(
    id: string,
    jobApplication: PostApplicationType
): Promise<ApplicationType> {
    return await processPostOrPutApplicationRequest(
        `${apiBaseUrl}/jobapplication?id=${id}`,
        "PUT",
        jobApplication
    );
}

/**
 * importApplicationsFromExcel()
 * ------------------------
 * Calls the API POST request *${apiBaseUrl}/importjobapps
 * @returns a Promise<ApiResponse | ImportApiResponse> whose returned data contains
 * the inserted job applications (with ImportApiResponse) OR
 * one of several error(s) message(s) with ApiResponse
 */
export async function importApplicationsFromExcel(
    file: File
): Promise<ApiResponse | ImportApiResponse> {
    const formData = new FormData();
    formData.append("file", file, file.name);

    try {
        const antiforgerytoken = await fetch(
            `${apiBaseUrl}/${APISubRouteEnum.AntiForgeryToken}`,
            {
                method: "GET",
                credentials: "include" // Necessary for sending properly the cookie to the server
            }
        ).then((response) => response.text());

        const importResponse = await fetch(
            `${apiBaseUrl}/${APISubRouteEnum.ImportJobApplications}`,
            {
                method: "POST",
                credentials: "include", // Necessary for sending properly the cookie to the server
                body: formData,
                headers: {
                    [ANTIFORGERY_TOKEN_HEADER]: antiforgerytoken
                }
            }
        );

        if (importResponse.status === 200) {
            const data = (await importResponse.json()) as {
                count?: number;
                insertedJobApps?: ApplicationType[];
            };

            const apiResponse: ImportApiResponse = {
                status: importResponse.status,
                data: {
                    count: data?.count ?? 0,
                    insertedJobApps: data?.insertedJobApps ?? []
                }
            };

            return apiResponse;
        }

        const data = (await importResponse.json()) as
            | {
                  errors: Record<string, string[]>;
              }
            | string;

        const apiResponse: ApiResponse = {
            status: importResponse.status,
            message: ""
        };

        if (typeof data === "object" && "errors" in data) {
            apiResponse.message = Object.keys(data.errors)
                .map((e) => data.errors[e][0])
                .join(" ");
        } else {
            apiResponse.message = typeof data === "string" ? data : "";
        }

        return apiResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * deleteOneApplication()
 * ------------------------
 * Calls the API DELETE request *${apiBaseUrl}/jobapplication?id=[job_app_ID]*
 * @returns a Promise<string> whose returned text contains an information message or
 * an error message
 */
export async function deleteOneApplication(id: string): Promise<ApiResponse> {
    return await fetch(
        `${apiBaseUrl}/${APISubRouteEnum.OneJobApplication}?id=${id}`,
        {
            method: "DELETE"
        }
    )
        .then((response) => {
            const apiResponse: ApiResponse = {
                status: response.status,
                message: ""
            };

            return response.json().then((message) => {
                apiResponse.message = message;
                return apiResponse;
            });
        })
        .catch((error) => {
            console.error(error);
            return error;
        });
}
