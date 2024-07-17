import Traduction from "./Traduction";

export default interface Category {
    id: string;
    label: string;
    text_color: string;
    background_color: string;
    traductions: Traduction[];
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
