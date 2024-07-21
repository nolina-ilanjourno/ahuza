import FilterBar from "@/Components/FilterBar/FilterBar";
import Pagination from "@/Components/Pagination/Pagination";
import SoftBadge from "@/Components/SoftBasge";
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
            <h1 className="mb-8 text-3xl font-bold">Catégories</h1>
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <FilterBar />
                <Link href={route("categories.create")} className="flex-1">
                    Créer une catégorie
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
                            <ul className="list-group list-group-horizontal">
                                {row.traductions.map(
                                    ({ traduction, langue, id }) => (
                                        <li
                                            key={id}
                                            className="list-group-item d-flex justify-content-between align-items-start"
                                            style={{
                                                backgroundColor:
                                                    row.background_color,
                                                color: row.text_color,
                                            }}
                                        >
                                            <div className="me-auto">
                                                {traduction}
                                            </div>
                                            <span className="ms-2 badge bg-primary rounded-pill">
                                                {langue.toUpperCase()}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        ),
                    },
                ]}
                rows={data}
                getRowDetailsUrl={(row) => route("categories.edit", row.id)}
            />
            <Pagination links={links} />
        </AuthenticatedLayout>
    );
}
