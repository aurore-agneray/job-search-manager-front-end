import { useParams } from "react-router-dom";
import { getApplicationById } from "../../services/applications-services";
import { Col, Container, Row } from "react-bootstrap";

export default function DisplayApplication() {
    const { id } = useParams();

    if (!id) {
        return <h1>Given ID not valid</h1>;
    }

    const application = getApplicationById(id);

    if (!application) {
        return <h1>Application not found</h1>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{application.Source}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{application.Position}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>{application.Place}</h3>
                </Col>
            </Row>
        </Container>
    );
}
