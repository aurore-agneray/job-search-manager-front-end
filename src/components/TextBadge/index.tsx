import styled from "styled-components";

/**
 * Represents the properties for the TextBadge component.
 */
type TextBadgeProps = {
    statusId: string;
    textContent: string;
    bgColor: string;
    selected: boolean;
    setSelected: (optionLabel: string) => void;
};

/**
 * CSS properties for the MyBadge local component.
 */
type MyBadgeProps = {
    $bgColor: string;
    $selected: boolean;
};

const MyBadge = styled.span<MyBadgeProps>`
    display: inline-block;
    padding: 0.2em 0.8em;
    margin: 0.35em;
    background-color: ${(props) => props.$bgColor};
    color: white;
    border-radius: 30px;
    font-size: 1em;
    text-align: center;
    vertical-align: baseline;
    opacity: ${(props) => (props.$selected ? 0.95 : 0.4)};
    box-shadow: ${(props) =>
        props.$selected
            ? "var(--my-var-shadow-status-badge) 2px 2px 2px"
            : "none"};
    &:hover {
        cursor: pointer;
    }
`;

/** TextBadge component
-------------------------
@param props Contains different kind of properties used to display the badge
@returns A selectable badge containing a text and a background color
*/
export default function TextBadge(props: TextBadgeProps) {
    return (
        <MyBadge
            className="noselectable"
            $selected={props.selected}
            $bgColor={props.bgColor}
            onClick={() => props.setSelected(props.statusId)}
        >
            {props.textContent}
        </MyBadge>
    );
}
