import Form from "react-bootstrap/esm/Form";

type InputFieldProps = {
    ControlId: string;
    Label?: string;
    Type?: string;
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
            {type === "textarea" ? (
                <Form.Control
                    as="textarea"
                    rows={3}
                />
            ) : (
                <Form.Control type={type} />
            )}
        </Form.Group>
    );
}
