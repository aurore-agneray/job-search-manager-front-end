import {
    ApplicationStatusType,
    ApplicationType,
    PostApplicationType
} from "../types";

const { default: initialApplications } = await import(
    `../../data/${import.meta.env.VITE_APP_DATA_SOURCE_FILE}.ts`
);

const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;

if (!apiBaseUrl) {
    throw new Error(
        "API base URL is not defined in the environment variables."
    );
}

export function getInitialAllApplications(): ApplicationType[] {
    return initialApplications;
}

export async function getAvailableStatuses(): Promise<ApplicationStatusType[]> {
    return await fetch(`${apiBaseUrl}/statuses`)
        .then((response) => response.json())
        .then((statusesJson) => {
            return statusesJson as ApplicationStatusType[];
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}

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

export async function postApplication(
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
