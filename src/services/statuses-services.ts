import { ApplicationStatusType } from "../types";
import { getApiBaseUrl } from "../utils/env-variables";
import { APISubRouteEnum } from "../enums";

const apiBaseUrl = getApiBaseUrl();

/**
 * getAllStatuses()
 * ------------------------
 * Calls the API GET request *${apiBaseUrl}/statuses*
 * @returns a Promise<ApplicationStatusType[]> whose array contains ApplicationStatusType objects if
 * there aren't any errors, or an empty array
 */
export async function getAllStatuses(): Promise<ApplicationStatusType[]> {
    return await fetch(`${apiBaseUrl}/${APISubRouteEnum.Statuses}`)
        .then((response) => response.json())
        .then((statusesJson) => {
            return statusesJson as ApplicationStatusType[];
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}
