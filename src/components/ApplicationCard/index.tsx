import styled from "styled-components";
import { ApplicationType } from "../../types";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline } from "@mdi/js";
import StatusIcon from "../StatusIcon";

type SubPartProps = {
    $minWidth?: number;
    $verticalAlignment?: "top" | "center" | "bottom";
};

const MyApplicationCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 251, 245);
    box-shadow: rgb(208, 145, 130) 3px 3px 5px;
    border-radius: 5px;
    margin: 0.5rem 0rem;
    padding: 1rem;
    max-width: 600px;
`;

const MainPart = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    column-gap: 100px;
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
    justify-content: ${(props) => props.$verticalAlignment || "top"};
    min-width: ${(props) => props.$minWidth || 200}px;
`;

const DateDiv = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
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
            <MainPart>
                <DateDiv>
                    Ai postulé le{" "}
                    {props.Date.toLocaleString("fr-FR", dateOptions)}
                </DateDiv>
                <SubPart>
                    <h3>{props.Source}</h3>
                    <h4>{props.Position}</h4>
                    <p>
                        <Icon
                            path={mdiMapMarkerOutline}
                            size={1}
                        />{" "}
                        {props.Place}
                    </p>
                </SubPart>
                <SubPart $verticalAlignment="center">
                    <p>
                        <span className="underlined-text">Pourquoi ?</span>{" "}
                        <br />
                        {props.Motivations}
                    </p>
                </SubPart>
            </MainPart>
            <FooterPart>
                <div>
                    <a
                        href={props.OfferUrl}
                        target="_blank"
                    >
                        Voir l'offre
                    </a>
                </div>
                <StatusIcon status={props.Status} />
            </FooterPart>
        </MyApplicationCard>
    );
}
