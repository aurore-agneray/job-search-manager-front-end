import ApplicationCard from "../../components/ApplicationCard";
import { ApplicationType } from "../../types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { default: myApplications } = await import(
    `../../../data/${import.meta.env.VITE_APP_DATA_SOURCE_FILE}`
);

function Home() {
    return (
        <Container>
            <Row>
                {myApplications
                    .sort((a: ApplicationType, b: ApplicationType) => {
                        if (!a.Date && b.Date) {
                            return -1;
                        } else if (a.Date && !b.Date) {
                            return 1;
                        } else if (a.Date && b.Date) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((applic: ApplicationType) => (
                        <Col
                            xl={6}
                            lg={12}
                            key={applic.Id}
                        >
                            <ApplicationCard {...applic} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default Home;
