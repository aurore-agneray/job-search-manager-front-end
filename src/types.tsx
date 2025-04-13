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

export type SelectOptionType = {
    value: string;
    label: string;
};

export type FormControlElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;

export type ApiResponse = {
    status: number;
    message: string;
};
