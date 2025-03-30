import { Col, Row } from "react-bootstrap";
import { ApplicationStatusEnum } from "../../enums";
import { useState } from "react";
import Form from "react-bootstrap/Form";

type SelectOption = {
    value: string;
    label: string;
};

type ApplicationsFilterProps = {
    selectedValues: SelectOption[];
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
                sm={12}
                md={3}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                Filtrer par statut
            </Col>
            <Col
                sm={12}
                md={9}
            >
                <Form.Select
                    aria-label="Filtre des candidatures en fonction de leur statut"
                    multiple
                    defaultValue={[]}
                    value={selectedValues}
                    onChange={(evt) => console.log(evt.target.value)}
                >
                    {filterOptions.map((opts) => (
                        <option value={opts.value}>{opts.label}</option>
                    ))}
                </Form.Select>
            </Col>
            {selectedValues.map((v) => (
                <span key={v}>{v}</span>
            ))}
        </Row>
    );
}
