import styled from "styled-components";

type StatusBadgeProps = {
    textContent: string;
    bgColor: string;
};

export default function StatusBadge(props: StatusBadgeProps) {
    const MyBadge = styled.span`
        display: inline-block;
        padding: 0.2em 0.8em;
        margin: 0.35em;
        background-color: ${props.bgColor};
        color: white;
        border-radius: 30px;
        font-size: 1em;
        text-align: center;
        vertical-align: baseline;
    `;

    return <MyBadge>{props.textContent}</MyBadge>;
}
