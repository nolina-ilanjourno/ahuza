import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button, Form } from "react-bootstrap";
import { FormEventHandler } from "react";
import UpdateProfileInformation from "./Partials/UpdateProfileInformationForm";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: auth.user.name,
            email: auth.user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />

            <UpdateProfileInformation />
            <UpdatePasswordForm />
        </AuthenticatedLayout>
    );
}
