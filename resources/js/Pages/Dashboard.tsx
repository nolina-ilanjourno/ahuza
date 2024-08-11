import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth }: PageProps) {
    const [value, setValue] = useState("");

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}
