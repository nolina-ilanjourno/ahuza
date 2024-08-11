import Category from "./Category";
import File from "./File";
import Traduction from "./Traduction";

export interface ArticleForm {
    illustration_id: string | null;
    title: string;
    slug: string;
    category_ids: string[];
    published_at: string | null;
    traductions: Partial<Traduction>[];
}

export default interface Article {
    id: string;
    illustration_id: string | null;
    title: string;
    slug: string;
    traductions: Traduction[];
    categories: Category[];
    illustration: File | null;
    published_at: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
