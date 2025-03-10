import styled from "styled-components";
import { ApplicationType } from "../../types";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline } from "@mdi/js";

const MyApplicationCard = styled.div`
    position: relative;
    background-color: rgb(255, 251, 245);
    box-shadow: rgb(208, 145, 130) 3px 3px 5px;
    border-radius: 5px;
    margin: 0.5rem 0rem;
    padding: 1rem;
    max-width: 600px;
`;

const DateDiv = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export default function ApplicationCard(props: ApplicationType) {
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    };

    return (
        <MyApplicationCard>
            <h3>{props.Source}</h3>
            <h4>{props.Position}</h4>
            <p>
                <Icon
                    path={mdiMapMarkerOutline}
                    size={1}
                />{" "}
                {props.Place}
            </p>
            <DateDiv>
                Ai postulé le {props.Date.toLocaleString("fr-FR", dateOptions)}
            </DateDiv>
            <p>
                <span className="underlined-text">Pourquoi ?</span> <br />
                {props.Motivations}
            </p>
        </MyApplicationCard>
    );
}
