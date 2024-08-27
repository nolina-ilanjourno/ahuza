import InternalCategoryForm from "@/Components/organisations/forms/InternalCategoryForm";
import InternalCategory from "@/Interfaces/InternalCategory";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const InternalCategoryEditView = ({
    auth,
    category,
}: PageProps<{
    category: InternalCategory;
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <InternalCategoryForm category={category} />
        </AuthenticatedLayout>
    );
};

export default InternalCategoryEditView;
