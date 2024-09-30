import KeywordGroupForm from "@/Components/organisations/forms/KeywordGroupForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const KeywordGroupCreateForm = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <KeywordGroupForm />
        </AuthenticatedLayout>
    );
};

export default KeywordGroupCreateForm;
