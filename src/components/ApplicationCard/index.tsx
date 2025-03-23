import styled from "styled-components";
import { useNavigate } from "react-router";
import { ApplicationType } from "../../types";
import {
    ApplicationDate,
    LocationName,
    Position,
    Contacts,
    OfferUrl
} from "../ApplicationParts";
import StatusIcon from "../StatusIcon";
import FeelingIcons from "../FeelingIcons";

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

const DateDiv = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    font-weight: 500;
    color: var(--bs-primary);
`;

export default function ApplicationCard(props: ApplicationType) {
    const navigate = useNavigate();

    return (
        <MyApplicationCard
            onClick={() => navigate(`/display-application/${props.Id}`)}
        >
            <MainPart>
                {props.Date && (
                    <DateDiv>
                        <ApplicationDate
                            IsFromMyInitiative={props.IsFromMyInitiative}
                            Date={props.Date}
                            MarginRight={0}
                        />
                    </DateDiv>
                )}
                <JobTitleSubPart>
                    <h3>{props.Source}</h3>
                    <h4>
                        <Position
                            IsSpontaneous={props.IsSpontaneous}
                            Position={props.Position}
                        />
                    </h4>
                </JobTitleSubPart>
                <SubPart
                    $marginTop={50}
                    $widthPercentage={70}
                    $justifyContent="space-between"
                >
                    <LocationName Place={props.Place} />
                    <Contacts Content={props.Contacts} />
                    <FeelingIcons
                        Id={props.Id}
                        FeelingLevel={props.FeelingLevel}
                        HorizontalAlignment="center"
                    />
                </SubPart>
            </MainPart>
            <FooterPart>
                <OfferUrl Url={props.OfferUrl} />
                <StatusIcon status={props.Status} />
            </FooterPart>
        </MyApplicationCard>
    );
}
