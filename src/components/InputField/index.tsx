import Form from "react-bootstrap/esm/Form";
import RequiredAsterisk from "../RequiredAsterisk";
import { FormControlElement, SelectOptionType } from "../../types";

/**
 * Represents the properties for the InputField component
 */
type InputFieldProps = {
    /** Name used for the controlId property of the Form.Group inner component */
    ControlId: string;
    /** Label of the displayed field */
    Label?: string;
    /** Content type of the field */
    Type?: "text" | "textarea" | "date" | "select";
    /** Value contained into the field */
    Value?: string;
    /** Message to display if the entered value is invalid */
    ErrorMessage?: string;
    /** Used by Formik to indicate if the input has been visited */
    Touched?: boolean;
    /** Available options for a select type */
    SelectOptions?: SelectOptionType[];
    OnChange?: (event: React.ChangeEvent<FormControlElement>) => void;
    OnBlur?: (event: React.FocusEvent<FormControlElement>) => void;
    Required?: boolean;
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
