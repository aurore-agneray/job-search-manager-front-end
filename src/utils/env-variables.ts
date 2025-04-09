/**
 * getApiBaseUrl()
 * ------------------------
 * @returns Read the content of the .env file to retrieve the base URL of the API
 */
export function getApiBaseUrl(): string {
    const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;

    if (!apiBaseUrl) {
        throw new Error(
            "The API base URL is not defined in the environment variables."
        );
    }

    return apiBaseUrl;
}
