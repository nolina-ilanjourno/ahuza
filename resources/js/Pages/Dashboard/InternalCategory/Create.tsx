import InternalCategoryForm from "@/Components/organisations/forms/InternalCategoryForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const InternalCategoryCreateView = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <InternalCategoryForm />
        </AuthenticatedLayout>
    );
};

export default InternalCategoryCreateView;
