export interface TraductionForm {
    langue: string;
    traduction: string;
}

export default interface Traduction<T = string> {
    id: string;
    langue: string;
    traduction: T;
    created_at: string;
    updated_at: string;
    pivot: {
        traduction_id: string;
        traductable_id: string;
        traductable_type: string;
        created_at: string;
        updated_at: string;
    };
}
