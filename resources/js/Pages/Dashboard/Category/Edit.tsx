import CategoryForm from "@/Components/organisations/forms/CategoryForm";
import Category from "@/Interfaces/Category";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const CategoryEditView = ({
    auth,
    category,
}: PageProps<{
    category: Category;
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <CategoryForm category={category} />
        </AuthenticatedLayout>
    );
};

export default CategoryEditView;
