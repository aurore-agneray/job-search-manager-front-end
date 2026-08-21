import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ApplicationType } from "../../types";
import { Place, Position, Contacts, OfferUrl } from "../ApplicationParts";
import FeelingIcons from "../FeelingIcons";
import { useState } from "react";
import { useStore } from "react-redux";
import { RootState } from "../../store";
import DateAndStatus from "../DateAndStatus";
import ApplicationDeleteTrigger from "../ApplicationDeleteTrigger";
import { getCommonCardsContainerStyles } from "../../utils/common";
import { RoutePathEnum } from "../../enums";

/**
 * Represents the properties for the local SubPart component,
 * whose properties corresponds to CSS properties
 */
type SubPartProps = {
    $widthPercentage?: number;
    $justifyContent?: "initial" | "space-between";
    $marginTop?: number;
};

/**
 * MyApplicationCard component
 * -------------------------
 * The global div tag of the ApplicationCard component
 */
const MyApplicationCard = styled.div`
    display: flex;
    flex-direction: column;
    ${getCommonCardsContainerStyles()}
`;

/**
 * MainPart component
 * -------------------------
 * Is inserted into the MyApplicationCard component
 */
const MainPart = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    column-gap: 20px;
    position: relative;

    & > div.date-and-status {
        position: absolute;
        right: 0px;
        top: 0px;
    }
`;

/**
 * FooterPart component
 * -------------------------
 * Is inserted into the MyApplicationCard component
 */
const FooterPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

/**
 * SubPart component
 * -------------------------
 * Is used within the MainPart component
 */
const SubPart = styled.div<SubPartProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.$justifyContent || "initial"};
    width: ${(props) => props.$widthPercentage || 30}%;
    margin-top: ${(props) => props.$marginTop || 0}px;
    overflow-wrap: anywhere;
`;

/**
 * SubPart component
 * -------------------------
 * Is used within the MainPart component
 */
const JobTitleSubPart = styled(SubPart)`
    border-right: 3px dotted #ec994c;
    padding-right: 20px;
`;

/** ApplicationCard component
-------------------------
@param props The object which represents the job application
@returns Displays briefly some information about the concerned job application
*/
export default function ApplicationCard(props: ApplicationType) {
    /* Is used to open the page of the job application bound to the card
     ** by clicking on it */
    const navigate = useNavigate();
    const store = useStore<RootState>();
    const [status] = useState(
        store
            .getState()
            .jobApplications.AvailableStatuses.find(
                (status) => status.id === props.statusId
            )!
    );

    return (
        <MyApplicationCard
            onClick={() =>
                navigate(`${RoutePathEnum.DisplayApplication}/${props.id}`)
            }
        >
            <MainPart>
                <DateAndStatus
                    applicationDate={props.date}
                    isFromMyInitiative={props.isFromMyInitiative}
                    status={status}
                />
                <JobTitleSubPart>
                    <h3>{props.source}</h3>
                    <h4>
                        <Position
                            IsSpontaneous={props.isSpontaneous}
                            PositionName={props.position}
                        />
                    </h4>
                </JobTitleSubPart>
                <SubPart
                    $marginTop={50}
                    $widthPercentage={70}
                    $justifyContent="space-between"
                >
                    <Place PlaceName={props.place} />
                    <Contacts Content={props.contacts} />
                    <FeelingIcons
                        Id={props.id}
                        FeelingLevel={props.feelingLevel}
                        HorizontalAlignment="center"
                    />
                </SubPart>
            </MainPart>
            <FooterPart>
                <OfferUrl Url={props.offerUrl} />
                <ApplicationDeleteTrigger id={props.id} />
            </FooterPart>
        </MyApplicationCard>
    );
}
