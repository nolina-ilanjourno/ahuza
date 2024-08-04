import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Alert } from "react-bootstrap";

export default function FlashedMessages() {
    const [visible, setVisible] = useState(true);
    const { flash, errors } = usePage<PageProps>().props;
    const formErrors = Object.keys(errors).length;

    useEffect(() => {
        setVisible(true);
    }, [flash, errors]);

    return (
        <>
            {flash.success && visible && (
                <Alert variant={"success"}>
                    This is a alert with{" "}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                </Alert>
            )}
            {flash.error && visible && (
                <Alert variant={"error"}>
                    This is a alert with{" "}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                </Alert>
            )}
            {formErrors > 0 && visible && (
                <Alert variant={"error"}>
                    This is a alert with{" "}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                </Alert>
            )}
        </>
    );
}
