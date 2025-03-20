import { ApplicationStatusEnum } from "./enums";

export type ApplicationType = {
    Id: string;
    Date?: string;
    Source: string;
    IsSpontaneous: boolean;
    IsFromMyInitiative: boolean;
    OfferUrl?: string;
    Position: string;
    Place: string;
    Status: ApplicationStatusEnum;
    Motivations?: string;
    Notes?: string;
    Contacts?: string;
    FeelingLevel: number;
};

export interface FormApplicationType {
    formDate: string;
    formIsFromMyInitiative: boolean;
    formIsSpontaneous: boolean;
    formSource: string;
    formOfferUrl: string;
    formPosition: string;
    formPlace: string;
    formMotivations: string;
    formNotes: string;
    formContacts: string;
}
