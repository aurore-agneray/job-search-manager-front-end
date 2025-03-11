import { ApplicationStatusEnum } from "./enums";

export type ApplicationType = {
    Id: string;
    Date?: Date;
    Source: string;
    OfferUrl: string;
    Position: string;
    Place: string;
    Motivations?: string;
    Status: ApplicationStatusEnum;
    Notes?: string;
};
