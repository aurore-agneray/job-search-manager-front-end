import { ApplicationType } from "../types";

const { default: myApplications } = await import(
    `../../data/${import.meta.env.VITE_APP_DATA_SOURCE_FILE}.ts`
);

export function getAllApplications(): ApplicationType[] {
    return myApplications;
}

export function getApplicationById(id: string): ApplicationType | undefined {
    return myApplications.find((applic: ApplicationType) => applic.Id === id);
}
