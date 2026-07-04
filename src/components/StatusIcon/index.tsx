import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { Icon } from "@mdi/react";
import {
    mdiDrawPen,
    mdiEmailFastOutline,
    mdiChatProcessingOutline,
    mdiPhoneOff,
    mdiFileRemove,
    mdiGhost,
    mdiPauseCircle,
    mdiHelp
} from "@mdi/js";

/**
 * Represents the properties for the StatusIcon component.
 */
type StatusIconProps = {
    statusName: string;
    iconName: string;
    color: string;
};

const StatusDiv = styled.div`
    font-weight: 500;
`;

/** StatusIcon component
-------------------------
@returns A representative icon of the concerned status with a tooltip displaying the status name
*/
export default function StatusIcon(props: StatusIconProps) {
    const getIconPath = function (iconName: string) {
        switch (iconName) {
            case "mdiDrawPen":
                return mdiDrawPen;
            case "mdiEmailFastOutline":
                return mdiEmailFastOutline;
            case "mdiChatProcessingOutline":
                return mdiChatProcessingOutline;
            case "mdiPhoneOff":
                return mdiPhoneOff;
            case "mdiFileRemove":
                return mdiFileRemove;
            case "mdiGhost":
                return mdiGhost;
            case "mdiPauseCircle":
                return mdiPauseCircle;
            default:
                return mdiHelp;
        }
    };

    return (
        <>
            <StatusDiv
                data-tooltip-id="status-tooltip"
                data-tooltip-content={props.statusName}
            >
                <Icon
                    path={getIconPath(props.iconName)}
                    size={1}
                    color={props.color}
                />
            </StatusDiv>
            <Tooltip id="status-tooltip" />
        </>
    );
}
