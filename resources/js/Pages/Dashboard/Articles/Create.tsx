import ArticleForm from "@/Components/organisations/forms/ArticleForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const ArticleCreateView = ({ auth }: PageProps<{}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <ArticleForm />
        </AuthenticatedLayout>
    );
};

export default ArticleCreateView;
