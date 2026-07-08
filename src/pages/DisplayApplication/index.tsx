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
import Button from "react-bootstrap/Button";
import FrText from "../../texts/fr.ts";

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

const ButtonCol = styled(Col)`
    text-align: right;
    padding-top: 0.5rem;
`;

/** DisplayApplication
-------------------------
Retrieves the ID of the job application from the page url and the object
which embodies the job application from the store
@returns a HTML component that displays all available information
about the concerned job application
*/
export default function DisplayApplication() {
    // Get the ID of the job application from the page url
    const { id } = useParams();
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
    const navigate = useNavigate();

    useEffect(() => {
        if (!id || !application) {
            // Arbitrary route name to provoke the 404 error, cf the routes of the web application
            navigate("/notfound", { replace: true });
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
                <Col 
                    md={6}
                    sm={12}
                >
                    <OfferUrl Url={application.offerUrl} />
                </Col>
                <ButtonCol 
                    md={3}
                    sm={12}
                >
                    <Button
                        variant="primary"
                        //onClick={() => navigate(`/edit-application/${application.id}`)}
                    >
                        {FrText.UpdateApplication.EditButton}
                    </Button>
                </ButtonCol>
                <ButtonCol 
                    md={3}
                    sm={12}
                >
                    <ApplicationDeleteTrigger
                        id={application.id}
                        appearance={DeleteTriggerAppearance.ButtonTextLink}
                    />
                </ButtonCol>
            </LastRow>
        </Container>
    );
}
