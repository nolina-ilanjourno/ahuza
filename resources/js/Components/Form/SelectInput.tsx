import { Form, FormSelectProps } from "react-bootstrap";

interface SelectInputProps extends FormSelectProps {
    error?: string;
    options: { value: string; label: string }[];
}

export default function SelectInput({
    name,
    error,
    className,
    options = [],
    ...props
}: SelectInputProps) {
    return (
        <div className={`mb-3 ${className}`}>
            <Form.Select id={name} name={name} {...props}>
                {options?.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                        {label}
                    </option>
                ))}
            </Form.Select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}
