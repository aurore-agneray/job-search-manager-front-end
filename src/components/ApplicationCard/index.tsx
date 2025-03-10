import styled from "styled-components";
import { ApplicationType } from "../../types";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline } from "@mdi/js";
import StatusIcon from "../StatusIcon";

type CardPartProps = {
    $minWidth?: number;
    $verticalAlignment?: "top" | "center" | "bottom";
};

const MyApplicationCard = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    column-gap: 100px;
    position: relative;
    background-color: rgb(255, 251, 245);
    box-shadow: rgb(208, 145, 130) 3px 3px 5px;
    border-radius: 5px;
    margin: 0.5rem 0rem;
    padding: 1rem;
    max-width: 600px;
`;

const CardPart = styled.div<CardPartProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.$verticalAlignment || "top"};
    min-width: ${(props) => props.$minWidth || 200}px;
`;

const DateDiv = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    font-weight: 500;
`;

export default function ApplicationCard(props: ApplicationType) {
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    };

    return (
        <MyApplicationCard>
            <DateDiv>
                Ai postulé le {props.Date.toLocaleString("fr-FR", dateOptions)}
            </DateDiv>
            <CardPart>
                <h3>{props.Source}</h3>
                <h4>{props.Position}</h4>
                <p>
                    <Icon
                        path={mdiMapMarkerOutline}
                        size={1}
                    />{" "}
                    {props.Place}
                </p>
            </CardPart>
            <CardPart $verticalAlignment="center">
                <p>
                    <span className="underlined-text">Pourquoi ?</span> <br />
                    {props.Motivations}
                </p>
            </CardPart>
            <StatusIcon status={props.Status} />
        </MyApplicationCard>
    );
}
