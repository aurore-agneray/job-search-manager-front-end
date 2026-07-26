import { ApplicationStatusType, ApplicationType } from "../../types";
import { parseDate } from "../../utils/common";

/**
 * @param Applications
 * @param filterSelectedValues
 * @returns The filtered applications according to the selected filtering options
 */
export const filterApplicationsByStatus = (
    Applications: ApplicationType[],
    filterSelectedValues: ApplicationStatusType[]
) => {
    return Applications.filter((applic: ApplicationType) => {
        if (filterSelectedValues.length === 0) {
            return false;
        }
        return filterSelectedValues.some((v) => v.id === applic.statusId);
    });
};

/**
 * @param Applications
 * @param sortOption
 * @returns The sorted applications according to the selected sorting option
 */
export const sortApplications = (
    Applications: ApplicationType[],
    sortOption: string
) => {
    return Applications.sort((a: ApplicationType, b: ApplicationType) => {
        switch (sortOption) {
            case "date-asc": {
                const dateDiff = parseDate(a.date) - parseDate(b.date);
                return dateDiff === 0 ? 0 : dateDiff < 0 ? -1 : 1;
            }
            case "company-asc":
                return a.source.localeCompare(b.source);
            case "company-desc":
                return b.source.localeCompare(a.source);
            case "date-desc":
            default: {
                const dateDiff = parseDate(b.date) - parseDate(a.date);
                return dateDiff === 0 ? 0 : dateDiff < 0 ? -1 : 1;
            }
        }
    });
};
