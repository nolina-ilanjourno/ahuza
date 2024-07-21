import FieldGroup from "@/Components/Form/FieldGroup";
import TextInput from "@/Components/Form/TextInput";
import { Link } from "@inertiajs/react";
import { FC } from "react";
import { Form } from "react-bootstrap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const CategoryCreateView = ({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link href={route("categories.index")}>Catégories</Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Créer
                </h1>
                <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                    <Form></Form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CategoryCreateView;
