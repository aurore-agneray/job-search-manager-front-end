import { Col, Row } from "react-bootstrap";
import { ApplicationStatusEnum } from "../../enums";
import { useState } from "react";
import StatusBadge from "./StatusBadge";

type SelectedOption = {
    value: string;
    label: string;
};

type ApplicationsFilterProps = {
    selectedValues: SelectedOption[];
};

const filterOptions = [
    {
        value: ApplicationStatusEnum.InPreparation,
        label: ApplicationStatusEnum.InPreparation
    },
    { value: ApplicationStatusEnum.Sent, label: ApplicationStatusEnum.Sent },
    {
        value: ApplicationStatusEnum.Processing,
        label: ApplicationStatusEnum.Processing
    },
    {
        value: ApplicationStatusEnum.NoResponse,
        label: ApplicationStatusEnum.NoResponse
    },
    {
        value: ApplicationStatusEnum.Refused,
        label: ApplicationStatusEnum.Refused
    },
    {
        value: ApplicationStatusEnum.Ghosted,
        label: ApplicationStatusEnum.Ghosted
    },
    {
        value: ApplicationStatusEnum.Suspended,
        label: ApplicationStatusEnum.Suspended
    }
];

export default function ApplicationsFilter(props: ApplicationsFilterProps) {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleMultiChange = (option: string) => {
        setSelectedValues([...selectedValues, option]);
    };

    return (
        <Row style={{ margin: "20px 0px" }}>
            <Col
                md={12}
                lg={3}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                Filtrer par statut
            </Col>
            <Col
                md={12}
                lg={9}
                style={{
                    textAlign: "center"
                }}
            >
                <StatusBadge
                    textContent={ApplicationStatusEnum.InPreparation}
                    bgColor="#4a99ff"
                />
                <StatusBadge
                    textContent={ApplicationStatusEnum.Sent}
                    bgColor="rgb(172, 169, 0)"
                />
                <StatusBadge
                    textContent={ApplicationStatusEnum.Processing}
                    bgColor="rgb(255, 143, 0)"
                />
                <StatusBadge
                    textContent={ApplicationStatusEnum.Refused}
                    bgColor="#c41111"
                />
                <StatusBadge
                    textContent={ApplicationStatusEnum.Suspended}
                    bgColor="#b94ab9"
                />
                <StatusBadge
                    textContent={ApplicationStatusEnum.NoResponse}
                    bgColor="gray"
                />
                <StatusBadge
                    textContent={ApplicationStatusEnum.Ghosted}
                    bgColor="gray"
                />
            </Col>
            {selectedValues.map((v) => (
                <span key={v}>{v}</span>
            ))}
        </Row>
    );
}
