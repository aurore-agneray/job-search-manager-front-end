import styled from "styled-components";
import { ApplicationType } from "../../types";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline } from "@mdi/js";
import StatusIcon from "../StatusIcon";

type SubPartProps = {
    $width?: number;
    $verticalAlignment?: "top" | "center" | "bottom";
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
    justify-content: ${(props) => props.$verticalAlignment || "top"};
    width: ${(props) => props.$width || 200}px;
    margin-top: ${(props) => props.$marginTop || 0}px;
`;

const DateDiv = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    font-weight: 500;
    color: var(--bs-primary);
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
                {props.Date && (
                    <DateDiv>
                        Ai postulé le{" "}
                        {props.Date.toLocaleString("fr-FR", dateOptions)}
                    </DateDiv>
                )}
                <SubPart className="job-title-subpart">
                    <h3>{props.Source}</h3>
                    <h4>{props.Position}</h4>
                </SubPart>
                <SubPart
                    $marginTop={50}
                    $width={400}
                >
                    <p className="location-name">
                        <Icon
                            path={mdiMapMarkerOutline}
                            size={1}
                        />{" "}
                        {props.Place}
                    </p>
                    <p>
                        <span className="underlined-text">Pourquoi ?</span>{" "}
                        <br />
                        {props.Motivations}
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
