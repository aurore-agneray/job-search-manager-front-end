import { useState } from "react";
import styled from "styled-components";

type StatusBadgeProps = {
    textContent: string;
    bgColor: string;
};

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

export default function StatusBadge(props: StatusBadgeProps) {
    const [selected, setSelected] = useState(false);

    return (
        <MyBadge
            className="noselectable"
            $selected={selected}
            $bgColor={props.bgColor}
            onClick={() => setSelected(!selected)}
        >
            {props.textContent}
        </MyBadge>
    );
}
