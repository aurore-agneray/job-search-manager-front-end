import styled from "styled-components";
import { ApplicationStatusEnum } from "../../enums";
import { Tooltip } from "react-tooltip";
import Icon from "@mdi/react";
import {
    mdiDrawPen,
    mdiEmailFastOutline,
    mdiChatProcessingOutline,
    mdiPhoneOff,
    mdiFileRemove,
    mdiHelp
} from "@mdi/js";

type StatusIconProps = {
    status: ApplicationStatusEnum;
};

const StatusDiv = styled.div`
    font-weight: 500;
`;

export default function StatusIcon(props: StatusIconProps) {
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
        <>
            <StatusDiv
                data-tooltip-id="status-tooltip"
                data-tooltip-content={props.status.toString()}
            >
                {renderStatus(props.status)}
            </StatusDiv>
            <Tooltip id="status-tooltip" />
        </>
    );
}
