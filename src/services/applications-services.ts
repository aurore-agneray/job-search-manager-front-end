import { ApplicationType } from "../types";

const { default: initialApplications } = await import(
    `../../data/${import.meta.env.VITE_APP_DATA_SOURCE_FILE}.ts`
);

export function getInitialAllApplications(): ApplicationType[] {
    return initialApplications;
}
