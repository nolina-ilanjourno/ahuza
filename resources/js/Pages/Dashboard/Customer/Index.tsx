import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import Customer from "@/Interfaces/Customer";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Fragment } from "react";

export default function CustomersView({
    auth,
    customers: {
        data,
        meta: { links },
    },
}: PageProps<{
    customers: PaginatedData<Customer>;
}>) {
    const onDelete = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
            return router.delete(route("dashboard.customers.destroy", id));
        }
    };

    const columns: ColumnDef<Customer>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.customers.edit", id)}
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
            header: "Nom complet",
            footer: (props) => props.column.id,
            accessorFn: ({ fullname }) => fullname,
            id: "fullname",
            cell: (info) => info.getValue(),
        },
        {
            header: "Email",
            footer: (props) => props.column.id,
            accessorFn: ({ email }) => email,
            id: "email",
            cell: (info) => info.getValue(),
        },
        {
            header: "Créé le",
            footer: (props) => props.column.id,
            accessorFn: ({ created_at }) =>
                DateTime.fromISO(created_at).toFormat("dd-MM-yyyy HH:mm"),
            id: "created_at",
            cell: (info) => info.getValue(),
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <TableV2<Customer> data={data} columns={columns} links={links} />
        </AuthenticatedLayout>
    );
}
