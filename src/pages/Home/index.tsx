import ApplicationCard from "../../components/ApplicationCard";
import { getAll as getAllApplications } from "../../store/jobApplicationsSlice";
import { ApplicationStatusType, ApplicationType } from "../../types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import ApplicationsFilter from "../../components/ApplicationsFilter";
import { useState } from "react";

// TODO : Update the description of this page when the web app will evolve

/** Home page
 * -------------------------
 * Dislays the main page of the web application.
 * It currently contains all job application retrieved from the database.
 */
function Home() {
    const myApplications = useSelector(getAllApplications);
    const [filterSelectedValues, setFilterSelectedValues] = useState<
        ApplicationStatusType[]
    >([]);

    /* The job applications are displayed by decreasing date (most recent first)
    and by chosen filtering options */
    const displayedApplications = [...myApplications]
        .sort((a: ApplicationType, b: ApplicationType) => {
            if (!a.date && b.date) {
                return -1;
            } else if (a.date && !b.date) {
                return 1;
            } else if (a.date && b.date) {
                return 1;
            }
            return 0;
        })
        .filter((applic: ApplicationType) => {
            if (filterSelectedValues.length === 0) {
                return false;
            }
            return filterSelectedValues.some((v) => v.id === applic.statusId);
        });

    return (
        <Container>
            <ApplicationsFilter setSelectedValues={setFilterSelectedValues} />
            <Row>
                {displayedApplications.length === 0 && (
                    <div
                        className="full-centered-text"
                        style={{ height: "100px" }}
                    >
                        Aucune candidature à afficher
                    </div>
                )}
                {displayedApplications.length > 0 &&
                    displayedApplications.map((applic: ApplicationType) => (
                        <Col
                            xl={6}
                            lg={12}
                            key={applic.id}
                        >
                            <ApplicationCard {...applic} />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default Home;
