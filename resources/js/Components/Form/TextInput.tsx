import { FC } from "react";
import { Form, FormControlProps as RBFormControlProps } from "react-bootstrap";

interface FormControlProps extends RBFormControlProps {
    error?: string;
}

const TextInput: FC<FormControlProps> = ({
    name,
    isInvalid,
    error,
    ...props
}) => {
    return (
        <Form.Group>
            <Form.Control id={name} name={name} {...props} />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default TextInput;
