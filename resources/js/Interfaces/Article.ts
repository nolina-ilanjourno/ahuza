import Category from "./Category";
import File from "./File";
import InternalCategory from "./InternalCategory";
import Traduction from "./Traduction";

export interface ArticleForm {
    illustration_id: string | null;
    title: string;
    description: string;
    keywords: string;
    slug: string;
    category_ids: string[];
    internal_category_ids: string[];
    published_at: string | null;
    traductions: Partial<Traduction>[];
}

export default interface Article {
    id: string;
    illustration_id: string | null;
    title: string;
    description: string;
    keywords: string;
    slug: string;
    traductions: Traduction[];
    categories: Category[];
    internal_categories: InternalCategory[];
    illustration: File | null;
    published_at: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
