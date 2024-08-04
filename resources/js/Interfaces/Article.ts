import Category from "./Category";

export interface ArticleForm {
    title: string;
    slug: string;
    category_ids: string[];
    content: string;
}

export default interface Article {
    id: string;
    title: string;
    slug: string;
    content: string;
    categories: Category[];
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
