export interface CustomerForm {
    fullname: string;
    email: string;
    phone: string;
}

export default interface Customer {
    id: string;
    fullname: string;
    email: string;
    phone: string | null;
    created_at: string;
    updated_at: string;
}
