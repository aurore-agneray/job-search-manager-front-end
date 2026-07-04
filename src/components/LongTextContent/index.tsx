import { LongTextType } from "../../types";

/**
 * Represents the properties for the LongTextContent component.
 */
type LongTextContentProps = {
    /** The title of the content. */
    Title: string;
} & LongTextType;

/** LongTextContent component
-------------------------
@param props Contains a long text with its title and a boolean to justify the text or not
@returns The text (justified or not) with its underlined title
*/
export default function LongTextContent(props: LongTextContentProps) {
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
