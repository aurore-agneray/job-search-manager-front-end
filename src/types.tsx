export type ApplicationType = {
    id: string;
    date?: string;
    source: string;
    isSpontaneous: boolean;
    isFromMyInitiative: boolean;
    offerUrl?: string;
    position: string;
    place: string;
    statusId?: string;
    motivations?: string;
    notes?: string;
    contacts?: string;
    feelingLevel: number | "";
};

export type PostApplicationType = {
    date: string;
    source: string;
    isSpontaneous: boolean;
    isFromMyInitiative: boolean;
    offerUrl: string;
    position: string;
    place: string;
    statusId: string;
    motivations: string;
    notes: string;
    contacts: string;
    feelingLevel: number;
};

export interface FormApplicationType {
    formDate: string;
    formIsFromMyInitiative: boolean;
    formIsSpontaneous: boolean;
    formSource: string;
    formOfferUrl: string;
    formPosition: string;
    formPlace: string;
    formStatus: string;
    formMotivations: string;
    formNotes: string;
    formContacts: string;
}

export type ApplicationStatusType = {
    id: string;
    name: string;
    color: string;
    iconName: string;
};

export enum SortOptionEnum {
    DateDesc = "date-desc",
    DateAsc = "date-asc",
    CompanyAsc = "company-asc",
    CompanyDesc = "company-desc"
}

export type SelectOptionType = {
    value: string;
    label: string;
};

export type FormControlElement =
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Represents a long text type used in multiple components.
 */
export type LongTextType = {
    /** The long text content. */
    Content: string | undefined;
    /** Whether the text should be justified. */
    Justify?: boolean;
};

export type ApiResponse = {
    status: number;
    message: string;
};

/**
 * ImportApiResponse type
 * ---------------------------------
 * Represents the response from the API when importing job applications from an Excel file.
 */
export type ImportApiResponse = {
    status: number;
    data: {
        // Quantity of inserted job applications in the database through the import
        count: number;
        insertedJobApps: ApplicationType[];
    };
};
