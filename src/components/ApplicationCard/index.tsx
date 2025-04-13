import styled from "styled-components";
import { useNavigate } from "react-router";
import { ApplicationType } from "../../types";
import {
    LocationName,
    Position,
    Contacts,
    OfferUrl
} from "../ApplicationParts";
import FeelingIcons from "../FeelingIcons";
import { useState } from "react";
import { useStore } from "react-redux";
import { RootState } from "../../store";
import DateAndStatus from "../DateAndStatus";
import DeleteTrigger from "../DeleteTrigger";

type SubPartProps = {
    $widthPercentage?: number;
    $justifyContent?: "initial" | "space-between";
    $marginTop?: number;
};

const MyApplicationCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--my-var-card-bg-color);
    box-shadow: var(--my-var-card-shadow-color) 3px 3px 5px;
    border-radius: 5px;
    margin: 0.5rem 0rem;
    padding: 1rem;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

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

const FooterPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SubPart = styled.div<SubPartProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.$justifyContent || "initial"};
    width: ${(props) => props.$widthPercentage || 30}%;
    margin-top: ${(props) => props.$marginTop || 0}px;
    overflow-wrap: anywhere;
`;

const JobTitleSubPart = styled(SubPart)`
    border-right: 3px dotted #ec994c;
    padding-right: 20px;
`;

/** ApplicationCard
-------------------------
@param props the object which represents the job application
@returns a HTML component that displays briefly some information
about the concerned job application
*/
export default function ApplicationCard(props: ApplicationType) {
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
            onClick={() => navigate(`/display-application/${props.id}`)}
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
                            Position={props.position}
                        />
                    </h4>
                </JobTitleSubPart>
                <SubPart
                    $marginTop={50}
                    $widthPercentage={70}
                    $justifyContent="space-between"
                >
                    <LocationName Place={props.place} />
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
                <DeleteTrigger id={props.id} />
            </FooterPart>
        </MyApplicationCard>
    );
}
