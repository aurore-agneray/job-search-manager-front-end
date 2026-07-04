import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import TextBadge from "../TextBadge";
import { ApplicationStatusType } from "../../types";
import { useStore } from "react-redux";
import { RootState } from "../../store";

type ApplicationsFilterProps = {
    setSelectedValues: (values: ApplicationStatusType[]) => void;
};

export default function ApplicationsFilter(props: ApplicationsFilterProps) {
    const store = useStore<RootState>();
    const [filterOptions] = useState(
        store.getState().jobApplications.AvailableStatuses
    );
    const [selectedValues, setSelectedValues] =
        useState<ApplicationStatusType[]>(filterOptions);

    const handleSetSelected = (optionId: string) => {
        if (!selectedValues.find((v) => v.id === optionId)) {
            setSelectedValues([
                ...selectedValues,
                filterOptions.find((v) => v.id === optionId)!
            ]);
        } else {
            setSelectedValues(selectedValues.filter((v) => v.id !== optionId));
        }
    };

    const handleSelectAll = () => {
        setSelectedValues(filterOptions);
    };

    const handleDeselectAll = () => {
        setSelectedValues([]);
    };

    useEffect(() => {
        // SET VALUES FOR THE PARENT
        props.setSelectedValues(selectedValues);
    }, [props, selectedValues]);

    return (
        <Row style={{ margin: "20px 0px" }}>
            <Col
                md={12}
                lg={3}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                }}
            >
                <div
                    className="noselectable clickable"
                    onClick={() => handleSelectAll()}
                >
                    Tout sélectionner
                </div>
                <div
                    className="noselectable clickable"
                    onClick={() => handleDeselectAll()}
                >
                    Tout désélectionner
                </div>
            </Col>
            <Col
                md={12}
                lg={9}
                style={{
                    textAlign: "center"
                }}
            >
                {filterOptions.map((option) => (
                    <TextBadge
                        key={option.id}
                        statusId={option.id}
                        textContent={option.name}
                        bgColor={option.color}
                        selected={
                            !!selectedValues.find((v) => v.id === option.id)
                        }
                        setSelected={handleSetSelected}
                    />
                ))}
            </Col>
        </Row>
    );
}
