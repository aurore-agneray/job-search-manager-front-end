import { ApplicationType } from "../types";

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

export async function getAllApplications(): Promise<ApplicationType[]> {
    const applications: ApplicationType[] = [];

    return await fetch(`${apiBaseUrl}/jobapplications`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return applications;
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}
