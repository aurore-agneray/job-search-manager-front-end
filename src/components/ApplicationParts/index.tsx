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
    Justify?: boolean;
};

type LongTextType = {
    Content: string | undefined;
    Justify?: boolean;
};

/** Position component
-------------------------
@param props The object which represents the position
@returns The name of the position
or a message indicating that it is a spontaneous job application
*/
export function Position(props: PositionProps) {
    const getPositionFunc = (isSpontaneous: boolean, position: string) => {
        if (isSpontaneous) {
            return "Candidature spontanée";
        }
        return position;
    };

    return <>{getPositionFunc(props.IsSpontaneous, props.Position)}</>;
}

/** LocationName component
-------------------------
@param props The object which contains the location name
@returns The name of the location with an appropriate icon
*/
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

/** ApplicationDate component
-------------------------
@param props The object which contains the date and other pieces of information
@returns The date and a message indicating if the user applied for a job 
by himself or if he answered to a solicitation
*/
export function ApplicationDate(props: ApplicationDateProps) {
    return (
        <span style={{ marginRight: props.MarginRight }}>
            Ai {props.IsFromMyInitiative ? " postulé " : " répondu "}
            le {" " + props.Date.toLocaleString()}
        </span>
    );
}

/** LongTextContent component
-------------------------
@param props Contains a long text with its title and a boolean to justify the text or not
@returns The text (justified or not) with its underlined title
*/
function LongTextContent(props: LongTextContentProps) {
    return (
        <>
            {props.Content && (
                <p style={{ textAlign: props.Justify ? "justify" : undefined }}>
                    <span className="underlined-text">{props.Title}</span>{" "}
                    <br />
                    {props.Content}
                </p>
            )}
        </>
    );
}

/** Contacts component
-------------------------
@param props Contains a long text and a boolean to justify the text or not
@returns The content of the "Contacts" field
*/
export function Contacts(props: LongTextType) {
    return (
        <LongTextContent
            Title="Contacts"
            Content={props?.Content}
            Justify={props?.Justify}
        />
    );
}

/** Motivations component
-------------------------
@param props Contains a long text and a boolean to justify the text or not
@returns The content of the "Motivations" field
*/
export function Motivations(props: LongTextType) {
    return (
        <LongTextContent
            Title="Motivations"
            Content={props?.Content}
            Justify={props?.Justify}
        />
    );
}

/** Notes component
-------------------------
@param props Contains a long text and a boolean to justify the text or not
@returns The content of the "Notes" field
*/
export function Notes(props: LongTextType) {
    return (
        <LongTextContent
            Title="Notes"
            Content={props?.Content}
            Justify={props?.Justify}
        />
    );
}

/** OfferUrl component
-------------------------
@returns The link \<a> dedicated to open the given URL
*/
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
