import { mdiMapMarkerOutline } from "@mdi/js";
import { Icon } from "@mdi/react";
import LongTextContent from "../LongTextContent";
import { LongTextType } from "../../types";
import FrText from "../../texts/fr.ts";

/**
 * Represents the properties for the Position component.
 */
type PositionProps = {
    /** Indicates if the job application is spontaneous or not */
    IsSpontaneous: boolean;
    /** The name of the position. */
    PositionName: string;
};

/**
 * Represents the properties for the Place component.
 */
type PlaceProps = {
    /** The name of the place. */
    PlaceName: string;
};

/**
 * Represents the properties for the ApplicationDate component.
 */
type ApplicationDateProps = {
    /** Indicates if the job application was initiated by the user
     * or if it was a response to a solicitation */
    IsFromMyInitiative: boolean;
    /** The date of the job application. */
    Date: string;
    /** The margin to the right of the date. */
    MarginRight: number;
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
            return FrText.ApplicationParts.Position.Spontaneous;
        }
        return position;
    };

    return <>{getPositionFunc(props.IsSpontaneous, props.PositionName)}</>;
}

/** Place component
-------------------------
@param props The object which contains the place name
@returns The name of the place with an appropriate icon
*/
export function Place(props: PlaceProps) {
    return (
        <p style={{ display: "flex", color: "var(--my-var-h3-color)" }}>
            <Icon
                path={mdiMapMarkerOutline}
                size={1}
            />{" "}
            {props.PlaceName}
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
            Ai{" "}
            {" " +
                (props.IsFromMyInitiative
                    ? FrText.ApplicationParts.Position.Applied
                    : FrText.ApplicationParts.Position.Responded) +
                " "}
            le {" " + props.Date.toLocaleString()}
        </span>
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
            Title={FrText.ApplicationParts.Position.Contacts}
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
            Title={FrText.ApplicationParts.Position.Motivations}
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
            Title={FrText.ApplicationParts.Position.Notes}
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
                    {FrText.ApplicationParts.Position.SeeOffer}
                </a>
            )}
        </div>
    );
}
