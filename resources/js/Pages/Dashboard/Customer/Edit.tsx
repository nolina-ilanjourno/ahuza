import CustomerForm from "@/Components/organisations/forms/CustomerForm";
import Customer from "@/Interfaces/Customer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const CustomerEditView = ({
    auth,
    customer,
}: PageProps<{
    customer: Customer;
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <CustomerForm customer={customer} />
        </AuthenticatedLayout>
    );
};

export default CustomerEditView;
