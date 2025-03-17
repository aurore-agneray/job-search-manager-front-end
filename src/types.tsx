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
