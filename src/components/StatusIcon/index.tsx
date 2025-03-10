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
import {
    DEFAULT_APPLICATION_COLOR,
    SENT_APPLICATION_COLOR,
    REJECTED_APPLICATION_COLOR,
    PROCESSING_APPLICATION_COLOR
} from "../../styles/colors.ts";

type StatusIconProps = {
    status: ApplicationStatusEnum;
};

const StatusDiv = styled.div`
    font-weight: 500;
`;

export default function StatusIcon(props: StatusIconProps) {
    const renderStatus = function (status: ApplicationStatusEnum) {
        const getIcon = (
            iconPath: string,
            color: string = DEFAULT_APPLICATION_COLOR
        ) => {
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
                return getIcon(mdiEmailFastOutline, SENT_APPLICATION_COLOR);
            case ApplicationStatusEnum.Processing:
                return getIcon(
                    mdiChatProcessingOutline,
                    PROCESSING_APPLICATION_COLOR
                );
            case ApplicationStatusEnum.NoResponse:
                return getIcon(mdiPhoneOff, REJECTED_APPLICATION_COLOR);
            case ApplicationStatusEnum.Refused:
                return getIcon(mdiFileRemove, REJECTED_APPLICATION_COLOR);
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
