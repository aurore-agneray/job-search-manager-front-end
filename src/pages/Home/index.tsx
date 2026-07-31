import ApplicationCard from "../../components/ApplicationCard";
import ApplicationTinyCard from "../../components/ApplicationTinyCard";
import { getAll as getAllApplications } from "../../store/jobApplicationsSlice";
import {
    ApplicationStatusType,
    ApplicationType,
    SortOptionEnum
} from "../../types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import ApplicationsFilter from "../../components/ApplicationsFilter";
import ApplicationsSorting from "../../components/ApplicationsSorting";
import ScrollUpDown from "../../components/ScrollUpDown";
import { filterApplicationsByStatus, sortApplications } from "./helpers";
import { useState } from "react";
import FrText from "../../texts/fr";
import { Form } from "react-bootstrap";
import ApplicationsImporter from "../../components/ApplicationsImporter";

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
    const [sortOption, setSortOption] = useState<SortOptionEnum>(
        SortOptionEnum.DateDesc
    );
    const [displayTiny, setDisplayTiny] = useState<boolean>(true);

    /* The job applications are displayed according to the chosen sorting option
    and by selected filtering options */
    const displayedApplications = sortApplications(
        filterApplicationsByStatus(myApplications, filterSelectedValues),
        sortOption
    );

    return (
        <Container>
            <ScrollUpDown></ScrollUpDown>
            <ApplicationsFilter setSelectedValues={setFilterSelectedValues} />
            <ApplicationsSorting setSortOption={setSortOption} />
            <Row style={{ alignItems: "center" }}>
                <Col lg={3}>
                    <Form.Check
                        type="switch"
                        id="display-tiny-card-switch"
                        label={FrText.Home.MinimalistModeSwitchLabel}
                        checked={displayTiny}
                        onChange={() => setDisplayTiny(!displayTiny)}
                    />
                </Col>
                <Col lg={9}>
                    <Form.Group
                        controlId="formImportFile"
                        className="mb-3"
                    >
                        <Row style={{ alignItems: "flex-end" }}>
                            <ApplicationsImporter></ApplicationsImporter>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                {displayedApplications.length === 0 && (
                    <div
                        className="full-centered-text"
                        style={{ height: "100px" }}
                    >
                        {FrText._General.Info.NoApplications}
                    </div>
                )}
                {displayedApplications.length > 0 &&
                    displayedApplications.map((applic: ApplicationType) => (
                        <Col
                            xl={!displayTiny ? 6 : 12}
                            lg={12}
                            key={applic.id}
                        >
                            {displayTiny ? (
                                <ApplicationTinyCard {...applic} />
                            ) : (
                                <ApplicationCard {...applic} />
                            )}
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default Home;
