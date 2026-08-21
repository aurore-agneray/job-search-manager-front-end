export enum ApplicationStatusEnum {
    InPreparation = "En préparation",
    Sent = "Envoyée",
    Processing = "En traitement",
    NoResponse = "Pas de réponse",
    Refused = "Refusée",
    Ghosted = "Ghostée ...",
    Suspended = "Suspendue"
}

export enum DeleteTriggerAppearance {
    Icon,
    ButtonTextLink
}

export enum RoutePathEnum {
    AddNewApplication = "/add-new-application",
    DisplayApplication = "/display-application",
    EditApplication = "/edit-application",
    Home = "/",
    NotFound = "/notfound"
}
