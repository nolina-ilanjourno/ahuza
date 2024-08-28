import InternalCategoryForm from "@/Components/organisations/forms/InternalCategoryForm";
import KeywordForm from "@/Components/organisations/forms/KeywordForm";
import Keyword from "@/Interfaces/Keyword";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const KeywordEditView = ({
    auth,
    keyword,
}: PageProps<{
    keyword: Keyword;
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <KeywordForm keyword={keyword} />
        </AuthenticatedLayout>
    );
};

export default KeywordEditView;
