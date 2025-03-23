import Form from "react-bootstrap/esm/Form";
import RequiredAsterisk from "../RequiredAsterisk";

type InputFieldProps = {
    ControlId: string;
    Label?: string;
    Type?: string;
    Value?: string;
    OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    OnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    Required?: boolean;
    ErrorMessage?: string;
    Touched?: boolean;
};

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
            <Form.Control
                {...commonProps}
                as={type === "textarea" ? "textarea" : undefined}
                rows={type === "textarea" ? 3 : undefined}
                isInvalid={props.Touched && !!props.ErrorMessage}
            />
            {props.Touched && props.ErrorMessage && (
                <div className="error-message">{props.ErrorMessage}</div>
            )}
        </Form.Group>
    );
}
