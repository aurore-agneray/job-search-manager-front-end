import styled from "styled-components";
import { ApplicationStatusType } from "../../types";
import { ApplicationDate } from "../ApplicationParts";
import StatusIcon from "../StatusIcon";

const MainDiv = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    color: var(--bs-primary);
`;

const DateDiv = styled.div`
    vertical-align: middle;
    font-weight: 500;
    color: var(--bs-primary);
`;

/**
 * Represents the properties for the DateAndStatus component
 */
type DateAndStatusProps = {
    status: ApplicationStatusType;
    applicationDate: string | undefined;
    /** Indicates if the job application was initiated by the user
     * or if it was a response to a solicitation */
    isFromMyInitiative: boolean;
};

/** DateAndStatus
-----------------
@param props contains the application date, a boolean indicating if the job application
is from the user's initiative or not, and the status object
@returns a HTML component containing a little text with the date, and an icon which represents 
the status
*/
export default function DateAndStatus(props: DateAndStatusProps) {
    return (
        <MainDiv className="date-and-status">
            {props.applicationDate && (
                <DateDiv>
                    <ApplicationDate
                        IsFromMyInitiative={props.isFromMyInitiative}
                        Date={props.applicationDate}
                        MarginRight={14}
                    />
                </DateDiv>
            )}
            {props.status && (
                <StatusIcon
                    statusName={props.status.name}
                    iconName={props.status.iconName}
                    color={props.status.color}
                />
            )}
        </MainDiv>
    );
}
