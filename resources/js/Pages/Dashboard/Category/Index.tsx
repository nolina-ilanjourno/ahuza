import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import Category from "@/Interfaces/Category";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import classNames from "classnames";
import { DateTime } from "luxon";
import { Fragment } from "react";
import { Badge } from "react-bootstrap";

export default function CategoriesView({
    auth,
    categories: {
        data,
        meta: { links },
    },
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    categories: PaginatedData<Category>;
}>) {
    const onDelete = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
            return router.delete(route("categories.destroy", id));
        }
    };

    const columns: ColumnDef<Category>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("categories.edit", id)}
                    />
                    <IconButton
                        size="sm"
                        icon="trash-2"
                        className="ms-1"
                        variant="danger"
                        onClick={() => onDelete(id)}
                    />
                </Fragment>
            ),
            cell: (info) => info.getValue(),
        },
        {
            header: "Label",
            footer: (props) => props.column.id,
            accessorFn: ({ label }) => label,
            id: "label",
            cell: (info) => info.getValue(),
        },
        {
            header: "Traductions",
            footer: (props) => props.column.id,
            accessorFn: ({ traductions }) =>
                traductions.map((traduction, index) => (
                    <Badge
                        key={traduction.id}
                        className={classNames({
                            "ms-1": index > 0,
                        })}
                    >
                        {traduction.traduction} (
                        {traduction.langue.toUpperCase()})
                    </Badge>
                )),
            id: "traductions",
            cell: (info) => info.getValue(),
        },
        {
            header: "Créé le",
            footer: (props) => props.column.id,
            accessorFn: ({ created_at }) =>
                DateTime.fromISO(created_at).toFormat("dd-MM-yyyy"),
            id: "created_at",
            cell: (info) => info.getValue(),
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <TableV2<Category> data={data} columns={columns} links={links} />
        </AuthenticatedLayout>
    );
}
