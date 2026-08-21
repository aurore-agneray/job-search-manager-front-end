import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "react-redux";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import { RootState } from "../../store";

import { Position } from "../ApplicationParts";
import DateAndStatus from "../DateAndStatus";
import ApplicationDeleteTrigger from "../ApplicationDeleteTrigger";
import { getCommonCardsContainerStyles } from "../../utils/common";

import { RoutePathEnum } from "../../enums";
import { ApplicationType } from "../../types";

/**
 * MyApplicationTinyCard component
 * -------------------------
 * The global div tag of the ApplicationTinyCard component
 */
const MyApplicationTinyCard = styled(Row)`
    ${getCommonCardsContainerStyles()}
`;

/** ApplicationTinyCard component
-------------------------
@param props The object which represents the job application
@returns Displays briefly some information about the concerned job application
*/
export default function ApplicationTinyCard(props: ApplicationType) {
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
        <MyApplicationTinyCard
            onClick={() =>
                navigate(`${RoutePathEnum.DisplayApplication}/${props.id}`)
            }
        >
            <Col
                xl={4}
                lg={3}
                md={6}
                sm={12}
            >
                <h3>{props.source}</h3>
            </Col>
            <Col
                xl={4}
                lg={3}
                md={6}
                sm={12}
            >
                <h4>
                    <Position
                        IsSpontaneous={props.isSpontaneous}
                        PositionName={props.position}
                    />
                </h4>
            </Col>
            <Col
                xl={3}
                lg={5}
                md={11}
                sm={11}
                xs={10}
                style={{ alignContent: "center" }}
            >
                <DateAndStatus
                    applicationDate={props.date}
                    isFromMyInitiative={props.isFromMyInitiative}
                    status={status}
                />
            </Col>
            <Col
                xl={1}
                lg={1}
                md={1}
                sm={1}
                xs={2}
                style={{ alignContent: "center" }}
            >
                <ApplicationDeleteTrigger id={props.id} />
            </Col>
        </MyApplicationTinyCard>
    );
}
