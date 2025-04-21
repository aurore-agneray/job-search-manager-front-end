import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getById as getApplicationById } from "../../store/jobApplicationsSlice";
import { Col, Container, Row } from "react-bootstrap";
import {
    Contacts,
    Place,
    Motivations,
    Notes,
    OfferUrl,
    Position
} from "../../components/ApplicationParts";
import FeelingIcons from "../../components/FeelingIcons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { RootState } from "../../store";
import DateAndStatus from "../../components/DateAndStatus";
import ApplicationDeleteTrigger from "../../components/ApplicationDeleteTrigger";
import { DeleteTriggerAppearance } from "../../enums";

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
`;

const LastRow = styled(AppDetailsRow)`
    display: flex;
    justify-content: space-between;
`;

/** DisplayApplication
-------------------------
Retrieves the ID of the job application from the page url and the object
which embodies the job application from the store
@returns a HTML component that displays all available information
about the concerned job application
*/
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
                            PositionName={application.position}
                        />
                    </h2>
                </Col>
                <Col
                    lg={4}
                    md={12}
                >
                    <DateAndStatus
                        applicationDate={application.date}
                        isFromMyInitiative={application.isFromMyInitiative}
                        status={status}
                    />
                </Col>
            </FirstRow>
            <AppDetailsRow>
                <Col
                    lg={8}
                    md={12}
                >
                    <Place PlaceName={application.place} />
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
                <Col>
                    <ApplicationDeleteTrigger
                        id={application.id}
                        appearance={DeleteTriggerAppearance.ButtonTextLink}
                    />
                </Col>
            </LastRow>
        </Container>
    );
}
