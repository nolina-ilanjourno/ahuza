import FAQForm from "@/Components/organisations/forms/FAQForm";
import FAQ from "@/Interfaces/FAQ";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FC } from "react";

const FAQEditView: FC<
    PageProps<{
        faq: FAQ;
    }>
> = ({ auth, faq }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <FAQForm faq={faq} />
        </AuthenticatedLayout>
    );
};

export default FAQEditView;
