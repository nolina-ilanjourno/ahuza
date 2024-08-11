import { Alert, Button } from "react-bootstrap";

interface TrashedMessageProps {
    message: string;
    onRestore: () => void;
}

export default function TrashedMessage({
    message,
    onRestore,
}: TrashedMessageProps) {
    return (
        <Alert variant="warning" className="d-flex align-items-center mt-5">
            {message}
            <Button size="sm" variant="link" onClick={onRestore}>
                Restauré
            </Button>
        </Alert>
    );
}
