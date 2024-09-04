import Category from "./Category";
import File from "./File";
import InternalCategory from "./InternalCategory";
import Keyword from "./Keyword";
import Traduction from "./Traduction";

interface ArticleTraduction {
    article: string;
    title: string;
    description: string;
    illustration_id: number | null;
    illustration: File | null;
}

export interface ArticleForm {
    title: string;
    slug: string;
    category_ids: string[];
    internal_category_ids: string[];
    keyword_ids: string[];
    published_at: string | null;
    traductions: Partial<Traduction<ArticleTraduction>>[];
}

export default interface Article {
    id: string;
    title: string;
    slug: string;
    traductions: Traduction<ArticleTraduction>[];
    categories: Category[];
    internal_categories: InternalCategory[];
    keywords: Keyword[];
    illustration: File | null;
    published_at: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
