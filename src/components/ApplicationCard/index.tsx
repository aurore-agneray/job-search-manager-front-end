import styled from "styled-components";
import { ApplicationType } from "../../types";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiRobotLove, mdiHeartBroken } from "@mdi/js";
import StatusIcon from "../StatusIcon";

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

const DateDiv = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    font-weight: 500;
    color: var(--bs-primary);
`;

const getPositionFunc = (isSpontaneous: boolean, position: string) => {
    if (isSpontaneous) {
        return "Candidature spontanée";
    }
    return position;
};

const getFeelingIconsFunc = (applicationId: string, feelingLevel: number) => {
    if (feelingLevel === 0) {
        return (
            <Icon
                color="var(--my-var-bad-feeling-color)"
                path={mdiHeartBroken}
                size={1}
            />
        );
    }

    return [1, 2, 3, 4, 5].slice(0, feelingLevel).map((lvl) => (
        <Icon
            color="var(--my-var-good-feeling-color)"
            key={applicationId + lvl}
            path={mdiRobotLove}
            size={1}
        />
    ));
};

export default function ApplicationCard(props: ApplicationType) {
    return (
        <MyApplicationCard>
            <MainPart>
                {props.Date && (
                    <DateDiv>
                        Ai{" "}
                        {props.IsFromMyInitiative ? " postulé " : " répondu "}
                        le {" " + props.Date.toLocaleString()}
                    </DateDiv>
                )}
                <SubPart className="job-title-subpart">
                    <h3>{props.Source}</h3>
                    <h4>
                        {getPositionFunc(props.IsSpontaneous, props.Position)}
                    </h4>
                </SubPart>
                <SubPart
                    $marginTop={50}
                    $widthPercentage={70}
                    $justifyContent="space-between"
                >
                    <p className="location-name">
                        <Icon
                            path={mdiMapMarkerOutline}
                            size={1}
                        />{" "}
                        {props.Place}
                    </p>
                    {props.Contacts && (
                        <p>
                            <span className="underlined-text">Contacts</span>{" "}
                            <br />
                            {props.Contacts}
                        </p>
                    )}
                    <p className="feeling-icons">
                        {getFeelingIconsFunc(props.Id, props.FeelingLevel)}
                    </p>
                </SubPart>
            </MainPart>
            <FooterPart>
                <div>
                    {props.OfferUrl && (
                        <a
                            href={props.OfferUrl}
                            target="_blank"
                        >
                            Voir l'offre
                        </a>
                    )}
                </div>
                <StatusIcon status={props.Status} />
            </FooterPart>
        </MyApplicationCard>
    );
}
