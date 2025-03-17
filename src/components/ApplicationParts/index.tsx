import { mdiMapMarkerOutline } from "@mdi/js";
import Icon from "@mdi/react";

type PositionProps = {
    IsSpontaneous: boolean;
    Position: string;
};

type LocationNameProps = {
    Place: string;
};

type ApplicationDateProps = {
    IsFromMyInitiative: boolean;
    Date: string;
    MarginRight: number;
};

type LongTextContentProps = {
    Title: string;
    Content: string | undefined;
};

type LongTextType = string | undefined;

export function Position(props: PositionProps) {
    const getPositionFunc = (isSpontaneous: boolean, position: string) => {
        if (isSpontaneous) {
            return "Candidature spontanée";
        }
        return position;
    };

    return <>{getPositionFunc(props.IsSpontaneous, props.Position)}</>;
}

export function LocationName(props: LocationNameProps) {
    return (
        <p style={{ display: "flex", color: "var(--my-var-h3-color)" }}>
            <Icon
                path={mdiMapMarkerOutline}
                size={1}
            />{" "}
            {props.Place}
        </p>
    );
}

export function ApplicationDate(props: ApplicationDateProps) {
    return (
        <span style={{ marginRight: props.MarginRight }}>
            Ai {props.IsFromMyInitiative ? " postulé " : " répondu "}
            le {" " + props.Date.toLocaleString()}
        </span>
    );
}

function LongTextContent(props: LongTextContentProps) {
    return (
        <>
            {props.Content && (
                <p style={{ textAlign: "justify" }}>
                    <span className="underlined-text">{props.Title}</span>{" "}
                    <br />
                    {props.Content}
                </p>
            )}
        </>
    );
}

export function Contacts(props: { Contacts: LongTextType }) {
    return (
        <LongTextContent
            Title="Contacts"
            Content={props.Contacts}
        />
    );
}

export function Motivations(props: { Motivations: LongTextType }) {
    return (
        <LongTextContent
            Title="Motivations"
            Content={props.Motivations}
        />
    );
}

export function Notes(props: { Notes: LongTextType }) {
    return (
        <LongTextContent
            Title="Notes"
            Content={props.Notes}
        />
    );
}

export function OfferUrl(props: { Url: string | undefined }) {
    return (
        <div>
            {props.Url && (
                <a
                    onClick={(e) => e.stopPropagation()}
                    href={props.Url}
                    target="_blank"
                >
                    Voir l'offre
                </a>
            )}
        </div>
    );
}
