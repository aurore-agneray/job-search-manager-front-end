import ApplicationCard from "../../components/ApplicationCard";
import { getAll as getAllApplications } from "../../store/jobApplicationsSlice";
import { ApplicationType, SelectedOptionType } from "../../types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import ApplicationsFilter from "../../components/ApplicationsFilter";
import { useState } from "react";

function Home() {
    const myApplications = useSelector(getAllApplications);
    const [filterSelectedValues, setFilterSelectedValues] = useState<
        SelectedOptionType[]
    >([]);

    const displayedApplications = [...myApplications]
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
        .filter((applic: ApplicationType) => {
            if (filterSelectedValues.length === 0) {
                return false;
            }
            return filterSelectedValues.some((v) => v.label === applic.Status);
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
