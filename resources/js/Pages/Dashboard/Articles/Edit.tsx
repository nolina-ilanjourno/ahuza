import ArticleForm from "@/Components/organisations/forms/ArticleForm";
import Article from "@/Interfaces/Article";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FC } from "react";

const ArticleEditView: FC<
    PageProps<{
        article: Article;
    }>
> = ({ auth, article }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <ArticleForm article={article} />
        </AuthenticatedLayout>
    );
};

export default ArticleEditView;
