/*************************************
 * PROVIDES COMMON UTILITY FUNCTIONS *
 ************************************/

const MIN_SCROLL_POSITION = 0;
const MAX_SCROLL_POSITION = 1000000;

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

/**
 * getCommonCardsContainerStyles()
 * ------------------------
 * Returns a string containing the common CSS styles for cards representing the job applications.
 */
export const getCommonCardsContainerStyles = (): string => {
    return `
        background-color: var(--my-var-card-bg-color);
        box-shadow: var(--my-var-card-shadow-color) 3px 3px 5px;
        border-radius: 5px;
        margin: 0.5rem 0rem;
        padding: 1rem;
        
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    `;
};

/**
 * ScrollToTopOrBottom()
 * ------------------------
 * Scroll the page to the top or the bottom
 * @param toTop if true, scroll to the top, if not to the bottom
 */
export const ScrollToTopOrBottom = (toTop: Boolean): void => {
    window.scrollTo({
        top: toTop ? MIN_SCROLL_POSITION : MAX_SCROLL_POSITION,
        left: MIN_SCROLL_POSITION,
        behavior: "smooth"
    });
};
