import Pagination from "@/Components/Pagination/Pagination";
import Table from "@/Components/Table/Table";
import Category from "@/Interfaces/Category";
import FAQ from "@/Interfaces/FAQ";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Trash2 } from "lucide-react";

export default function CategoriesView({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { categories } = usePage<{
        categories: PaginatedData<Category>;
    }>().props;

    const {
        data,
        meta: { links },
    } = categories;

    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <h1 className="mb-8 text-3xl font-bold">Contacts</h1>
                <div className="flex items-center justify-between mb-6">
                    <Link
                        className="btn-indigo focus:outline-none"
                        href={route("categories.index")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> Contact</span>
                    </Link>
                </div>
                <Table
                    columns={[
                        {
                            label: "Label",
                            name: "label",
                            renderCell: (row) => (
                                <>
                                    {row.label}
                                    {row.deleted_at && (
                                        <Trash2
                                            size={16}
                                            className="ml-2 text-gray-400"
                                        />
                                    )}
                                </>
                            ),
                        },
                        {
                            label: "Traductions",
                            name: "traductions",
                            renderCell: (row) => (
                                <ul>
                                    {row.traductions.map((traduction) => (
                                        <li key={traduction.id}>
                                            {traduction.langue}:{" "}
                                            {traduction.traduction}
                                        </li>
                                    ))}
                                </ul>
                            ),
                        },
                    ]}
                    rows={data}
                    getRowDetailsUrl={(row) => route("categories.edit", row.id)}
                />
                <Pagination links={links} />
            </div>
        </AuthenticatedLayout>
    );
}
