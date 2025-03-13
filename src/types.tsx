import { ApplicationStatusEnum } from "./enums";

export type ApplicationType = {
    Id: string;
    Date?: string; // The Date format is not serializable and can't be used by Redux properly !
    Source: string;
    OfferUrl: string;
    Position: string;
    Place: string;
    Motivations?: string;
    Status: ApplicationStatusEnum;
    Notes?: string;
};
