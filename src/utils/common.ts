/*************************************
 * PROVIDES COMMON UTILITY FUNCTIONS *
 ************************************/

/**
 * parseDate()
 * ------------------------
 * @param value - A date string in the format "dd/mm/yyyy" or "yyyy-mm-dd".
 * @returns The timestamp corresponding to the parsed date. If the input is invalid or empty, it returns Number.NEGATIVE_INFINITY.
 */
export const parseDate = (value?: string): number => {
    if (!value) {
        return Number.NEGATIVE_INFINITY;
    }

    const parts = value.split("/");
    if (parts.length === 3) {
        const [day, month, year] = parts.map(Number);
        const parsedDate = new Date(year, month - 1, day);
        if (!Number.isNaN(parsedDate.getTime())) {
            return parsedDate.getTime();
        }
    }

    const parsedDate = new Date(value);
    return Number.isNaN(parsedDate.getTime())
        ? Number.NEGATIVE_INFINITY
        : parsedDate.getTime();
};
