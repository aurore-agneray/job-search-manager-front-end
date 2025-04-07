import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getById as getApplicationById } from "../../store/jobApplicationsSlice";
import { Col, Container, Row } from "react-bootstrap";
import {
    ApplicationDate,
    Contacts,
    LocationName,
    Motivations,
    Notes,
    OfferUrl,
    Position
} from "../../components/ApplicationParts";
import StatusIcon from "../../components/StatusIcon";
import FeelingIcons from "../../components/FeelingIcons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { RootState } from "../../store";

const AppDetailsRow = styled(Row)`
    padding: 0.8rem 0rem;
`;

const FirstRow = styled(AppDetailsRow)`
    padding: 1.5rem 0rem !important;
    border-bottom: 3px dotted var(--my-var-h4-color);

    & > div.col-md-12 {
        display: flex;
        align-items: flex-end;
    }

    & > div.col-md-12 > h1,
    & > div.col-md-12 > h2 {
        display: inline;
        margin-bottom: 0px !important;
    }

    & > div.col-md-12:last-child {
        justify-content: right;
        padding-top: 30px !important;
        color: var(--bs-primary);
    }
`;

const LastRow = styled(AppDetailsRow)`
    text-align: right;
`;

export default function DisplayApplication() {
    const { id } = useParams();
    const navigate = useNavigate();
    const store = useStore<RootState>();
    const application = useSelector((state: RootState) =>
        getApplicationById(state, id)
    );
    const [status] = useState(
        store
            .getState()
            .jobApplications.AvailableStatuses.find(
                (status) => status.id === application?.statusId
            )!
    );
    const notFoundRouteName = "/notfound";

    useEffect(() => {
        if (!id || !application) {
            navigate(notFoundRouteName, { replace: true });
        }
    }, [application, id, navigate]);

    if (!application) {
        return null;
    }

    return (
        <Container>
            <FirstRow>
                <Col
                    lg={8}
                    md={12}
                >
                    <h2>
                        {application.source} {" - "}
                        <Position
                            IsSpontaneous={application.isSpontaneous}
                            Position={application.position}
                        />
                    </h2>
                </Col>
                <Col
                    lg={4}
                    md={12}
                >
                    {application.date && (
                        <ApplicationDate
                            IsFromMyInitiative={application.isFromMyInitiative}
                            Date={application.date}
                            MarginRight={20}
                        />
                    )}
                    <StatusIcon
                        statusName={status.name}
                        iconName={status.iconName}
                        color={status.color}
                    />
                </Col>
            </FirstRow>
            <AppDetailsRow>
                <Col
                    lg={8}
                    md={12}
                >
                    <LocationName Place={application.place} />
                </Col>
                <Col
                    lg={4}
                    md={12}
                >
                    <FeelingIcons
                        Id={application.id}
                        FeelingLevel={application.feelingLevel}
                        HorizontalAlignment="right"
                    />
                </Col>
            </AppDetailsRow>
            <AppDetailsRow>
                <Col>
                    <Contacts
                        Content={application.contacts}
                        Justify
                    />
                </Col>
            </AppDetailsRow>
            <AppDetailsRow>
                <Col>
                    <Motivations
                        Content={application.motivations}
                        Justify
                    />
                </Col>
            </AppDetailsRow>
            <AppDetailsRow>
                <Col>
                    <Notes
                        Content={application.notes}
                        Justify
                    />
                </Col>
            </AppDetailsRow>
            <LastRow>
                <Col>
                    <OfferUrl Url={application.offerUrl} />
                </Col>
            </LastRow>
        </Container>
    );
}
