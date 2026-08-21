import { Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { SortOptionEnum } from "../../types";
import FrText from "../../texts/fr.ts";

/**
 * Represents the properties for the ApplicationsSorting component
 */
type ApplicationsSortingProps = {
    /** The fonction used to update the sorting option in the parent component */
    setSortOption: (sortOption: SortOptionEnum) => void;
};

/** ApplicationsSorting component
-------------------------
@param props Contains the fonction used to update the sorting option in the parent component
@returns A dropdown menu allowing the user to sort the applications by date or company name
*/
export default function ApplicationsSorting(props: ApplicationsSortingProps) {
    const [sortOption, setSortOption] = useState<SortOptionEnum>(
        SortOptionEnum.DateDesc
    );

    useEffect(() => {
        // SET VALUES FOR THE PARENT
        props.setSortOption(sortOption);
    }, [props, sortOption]);

    return (
        <Row>
            <Col>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "20px"
                    }}
                >
                    <Form.Group style={{ minWidth: "260px" }}>
                        <Form.Label>
                            {FrText.ApplicationsFilter.SortLabel}
                        </Form.Label>
                        <Form.Select
                            value={sortOption}
                            onChange={(event) =>
                                setSortOption(
                                    event.target.value as SortOptionEnum
                                )
                            }
                        >
                            <option value={SortOptionEnum.DateDesc}>
                                {FrText.ApplicationsFilter.SortOptions.DateDesc}
                            </option>
                            <option value={SortOptionEnum.DateAsc}>
                                {FrText.ApplicationsFilter.SortOptions.DateAsc}
                            </option>
                            <option value={SortOptionEnum.CompanyAsc}>
                                {
                                    FrText.ApplicationsFilter.SortOptions
                                        .CompanyAsc
                                }
                            </option>
                            <option value={SortOptionEnum.CompanyDesc}>
                                {
                                    FrText.ApplicationsFilter.SortOptions
                                        .CompanyDesc
                                }
                            </option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </Col>
        </Row>
    );
}
