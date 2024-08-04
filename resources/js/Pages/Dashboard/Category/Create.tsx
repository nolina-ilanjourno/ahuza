import CategoryForm from "@/Components/organisations/forms/CategoryForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const CategoryCreateView = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <CategoryForm />
        </AuthenticatedLayout>
    );
};

export default CategoryCreateView;
