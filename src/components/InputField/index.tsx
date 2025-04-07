import Form from "react-bootstrap/esm/Form";
import RequiredAsterisk from "../RequiredAsterisk";
import { FormControlElement, SelectOptionType } from "../../types";

type InputFieldProps = {
    ControlId: string;
    Label?: string;
    Type?: string;
    Value?: string;
    OnChange?: (event: React.ChangeEvent<FormControlElement>) => void;
    OnBlur?: (event: React.FocusEvent<FormControlElement>) => void;
    Required?: boolean;
    ErrorMessage?: string;
    Touched?: boolean;
    SelectOptions?: SelectOptionType[];
};

/**************************************************
 * InputField component
 * _______________________________
 * Displays an input of different possible types :
 * - text
 * - textarea
 * - date
 * - select
 * ************************************************/
export default function InputField(props: InputFieldProps) {
    const label = props.Label || "Sans titre";
    const type = props.Type || "text";

    const commonProps = {
        name: props.ControlId,
        required: props.Required ?? false,
        onChange: props.OnChange,
        onBlur: props.OnBlur,
        value: props.Value,
        type: type
    };

    return (
        <Form.Group
            className="mb-3"
            style={{ position: "relative" }}
            controlId={props.ControlId}
        >
            <Form.Label>{label}</Form.Label>
            {props.Required && <RequiredAsterisk />}
            {type === "select" && props.SelectOptions ? (
                <Form.Select
                    as="select"
                    value={props.Value}
                    onChange={props.OnChange}
                    onBlur={props.OnBlur}
                    isInvalid={props.Touched && !!props.ErrorMessage}
                >
                    <option value=""></option>
                    {props.SelectOptions.map((opt) => (
                        <option
                            key={opt.value}
                            value={opt.value}
                        >
                            {opt.label}
                        </option>
                    ))}
                </Form.Select>
            ) : (
                <Form.Control
                    {...commonProps}
                    as={type === "textarea" ? "textarea" : undefined}
                    rows={type === "textarea" ? 3 : undefined}
                    isInvalid={props.Touched && !!props.ErrorMessage}
                />
            )}
            {props.Touched && props.ErrorMessage && (
                <div className="error-message">{props.ErrorMessage}</div>
            )}
        </Form.Group>
    );
}
