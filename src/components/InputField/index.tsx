import Form from "react-bootstrap/esm/Form";
import RequiredAsterisk from "../RequiredAsterisk";

type InputFieldProps = {
    ControlId: string;
    Label?: string;
    Type?: string;
    Required?: boolean;
};

export default function InputField(props: InputFieldProps) {
    const label = props.Label || "Sans titre";
    const type = props.Type || "text";

    return (
        <Form.Group
            className="mb-3"
            controlId={props.ControlId}
        >
            <Form.Label>{label}</Form.Label>
            {props.Required && <RequiredAsterisk />}
            {type === "textarea" ? (
                <Form.Control
                    as="textarea"
                    rows={3}
                    name={props.ControlId}
                    required={props.Required ?? false}
                />
            ) : (
                <Form.Control
                    type={type}
                    name={props.ControlId}
                    required={props.Required ?? false}
                />
            )}
        </Form.Group>
    );
}
