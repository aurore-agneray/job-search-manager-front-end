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
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
    const application = useSelector((state: RootState) =>
        getApplicationById(state, id)
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
                        {application.Source} {" - "}
                        <Position
                            IsSpontaneous={application.IsSpontaneous}
                            Position={application.Position}
                        />
                    </h2>
                </Col>
                <Col
                    lg={4}
                    md={12}
                >
                    {application.Date && (
                        <ApplicationDate
                            IsFromMyInitiative={application.IsFromMyInitiative}
                            Date={application.Date}
                            MarginRight={20}
                        />
                    )}
                    <StatusIcon status={application.Status} />
                </Col>
            </FirstRow>
            <AppDetailsRow>
                <Col
                    lg={8}
                    md={12}
                >
                    <LocationName Place={application.Place} />
                </Col>
                <Col
                    lg={4}
                    md={12}
                >
                    <FeelingIcons
                        Id={application.Id}
                        FeelingLevel={application.FeelingLevel}
                        HorizontalAlignment="right"
                    />
                </Col>
            </AppDetailsRow>
            <AppDetailsRow>
                <Col>
                    <Contacts
                        Content={application.Contacts}
                        Justify
                    />
                </Col>
            </AppDetailsRow>
            <AppDetailsRow>
                <Col>
                    <Motivations
                        Content={application.Motivations}
                        Justify
                    />
                </Col>
            </AppDetailsRow>
            <AppDetailsRow>
                <Col>
                    <Notes
                        Content={application.Notes}
                        Justify
                    />
                </Col>
            </AppDetailsRow>
            <LastRow>
                <Col>
                    <OfferUrl Url={application.OfferUrl} />
                </Col>
            </LastRow>
        </Container>
    );
}
