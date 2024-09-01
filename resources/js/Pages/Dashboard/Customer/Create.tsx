import CustomerForm from "@/Components/organisations/forms/CustomerForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const CustomerCreateView = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <CustomerForm />
        </AuthenticatedLayout>
    );
};

export default CustomerCreateView;
