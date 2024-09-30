import Keyword from "./Keyword";

export interface KeywordGroupForm {
    label: string;
    keyword_ids: string[];
}

export default interface KeywordGroup {
    id: string;
    label: string;
    keywords: Keyword[];
    created_at: string;
    updated_at: string;
}
