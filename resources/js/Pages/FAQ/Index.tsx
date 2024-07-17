import Pagination from "@/Components/Pagination/Pagination";
import Table from "@/Components/Table/Table";
import FAQ from "@/Interfaces/FAQ";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Trash2 } from "lucide-react";

export default function FAQView({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { contacts } = usePage<{
        contacts: PaginatedData<FAQ>;
    }>().props;

    const {
        data,
        meta: { links },
    } = contacts;

    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <h1 className="mb-8 text-3xl font-bold">Contacts</h1>
                <div className="flex items-center justify-between mb-6">
                    <Link
                        className="btn-indigo focus:outline-none"
                        href={route("contacts.create")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> Contact</span>
                    </Link>
                </div>
                <Table
                    columns={[
                        {
                            label: "Name",
                            name: "name",
                            renderCell: (row: any) => (
                                <>
                                    {row.name}
                                    {row.deleted_at && (
                                        <Trash2
                                            size={16}
                                            className="ml-2 text-gray-400"
                                        />
                                    )}
                                </>
                            ),
                        },
                        { label: "Organization", name: "organization.name" },
                        { label: "City", name: "city" },
                        { label: "Phone", name: "phone", colSpan: 2 },
                    ]}
                    rows={data}
                    getRowDetailsUrl={(row) => route("contacts.edit", row.id)}
                />
                <Pagination links={links} />
            </div>
        </AuthenticatedLayout>
    );
}
