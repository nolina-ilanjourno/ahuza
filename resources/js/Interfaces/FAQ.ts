import Traduction from "./Traduction";

export interface FAQTraduction {
    answer: string;
    question: string;
}
export interface FAQForm {
    label: string;
    traductions: Partial<Traduction<FAQTraduction>>[];
}

export default interface FAQ {
    id: string;
    label: string;
    traductions: Traduction<FAQTraduction>[];
    created_at: string;
    updated_at: string;
}
