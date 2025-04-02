import { Col, Row } from "react-bootstrap";
import { ApplicationStatusEnum } from "../../enums";
import { useState } from "react";
import StatusBadge from "./StatusBadge";

type SelectedOption = {
    label: string;
    bgColor: string;
};

type ApplicationsFilterProps = {
    selectedValues: SelectedOption[];
};

const filterOptions: SelectedOption[] = [
    {
        label: ApplicationStatusEnum.InPreparation,
        bgColor: "#4a99ff"
    },
    { label: ApplicationStatusEnum.Sent, bgColor: "rgb(172, 169, 0)" },
    {
        label: ApplicationStatusEnum.Processing,
        bgColor: "rgb(255, 143, 0)"
    },
    {
        label: ApplicationStatusEnum.NoResponse,
        bgColor: "gray"
    },
    {
        label: ApplicationStatusEnum.Refused,
        bgColor: "#c41111"
    },
    {
        label: ApplicationStatusEnum.Ghosted,
        bgColor: "gray"
    },
    {
        label: ApplicationStatusEnum.Suspended,
        bgColor: "#b94ab9"
    }
];

export default function ApplicationsFilter(props: ApplicationsFilterProps) {
    const [selectedValues, setSelectedValues] = useState<SelectedOption[]>([]);
    const [forceSelected, setForceSelected] = useState(false);
    const [forceDeselected, setForceDeselected] = useState(false);

    const handleSelectAll = () => {
        setForceSelected(true);
    };

    const handleDeselectAll = () => {
        setForceDeselected(true);
    };

    return (
        <Row style={{ margin: "20px 0px" }}>
            <Col
                md={12}
                lg={3}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div>Filtrer par statut</div>
                <div onClick={() => handleSelectAll()}>Tout sélectionner</div>
                <div onClick={() => handleDeselectAll()}>
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
                    <StatusBadge
                        key={option.label}
                        textContent={option.label}
                        bgColor={option.bgColor}
                        forceSelected={forceSelected}
                        forceDeselected={forceDeselected}
                        onAfterForceSelected={() => {
                            if (forceSelected) setForceSelected(false);
                        }}
                        onAfterForceDeselected={() => {
                            if (forceDeselected) setForceDeselected(false);
                        }}
                    />
                ))}
            </Col>
        </Row>
    );
}
