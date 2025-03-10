import styled from "styled-components";
import { ApplicationType } from "../../types";
import Icon from "@mdi/react";
import {
    mdiMapMarkerOutline,
    mdiDrawPen,
    mdiEmailFastOutline,
    mdiChatProcessingOutline,
    mdiPhoneOff,
    mdiFileRemove,
    mdiHelp
} from "@mdi/js";
import { ApplicationStatusEnum } from "../../enums";
import { Tooltip } from "react-tooltip";

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

const StatusDiv = styled.div`
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-weight: 500;
`;

export default function ApplicationCard(props: ApplicationType) {
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    };

    const renderStatus = function (status: ApplicationStatusEnum) {
        const getIcon = (iconPath: string, color: string = "black") => {
            return (
                <Icon
                    path={iconPath}
                    size={1}
                    color={color}
                />
            );
        };

        switch (status) {
            case ApplicationStatusEnum.InPreparation:
                return getIcon(mdiDrawPen);
            case ApplicationStatusEnum.Sent:
                return getIcon(mdiEmailFastOutline, "orange");
            case ApplicationStatusEnum.Processing:
                return getIcon(mdiChatProcessingOutline, "blue");
            case ApplicationStatusEnum.NoResponse:
                return getIcon(mdiPhoneOff, "red");
            case ApplicationStatusEnum.Refused:
                return getIcon(mdiFileRemove, "red");
            default:
                return getIcon(mdiHelp);
        }
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
            <StatusDiv
                data-tooltip-id="status-tooltip"
                data-tooltip-content={props.Status.toString()}
            >
                {renderStatus(props.Status)}
            </StatusDiv>
            <Tooltip id="status-tooltip" />
        </MyApplicationCard>
    );
}
