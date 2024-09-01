import Customer from "./Customer";

export interface ContactForm {
    fullname: string;
    email: string;
    message: string;
}

export default interface Contact {
    id: string;
    customer: Customer;
    message: string;
    created_at: string;
    updated_at: string;
}
