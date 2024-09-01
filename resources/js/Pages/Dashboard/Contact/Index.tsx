import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import Contact from "@/Interfaces/Contact";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Fragment } from "react";

export default function ContactsView({
    auth,
    contacts: {
        data,
        meta: { links },
    },
}: PageProps<{
    contacts: PaginatedData<Contact>;
}>) {
    const columns: ColumnDef<Contact>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.contacts.show", id)}
                    />
                </Fragment>
            ),
            cell: (info) => info.getValue(),
        },
        {
            header: "Nom",
            footer: (props) => props.column.id,
            accessorFn: ({ customer }) => (
                <Link href={route("dashboard.customers.show", customer.id)}>
                    {customer.fullname}
                </Link>
            ),
            id: "customer.fullname",
            cell: (info) => info.getValue(),
        },
        {
            header: "Email",
            footer: (props) => props.column.id,
            accessorFn: ({ customer }) => (
                <Link href={route("dashboard.customers.show", customer.id)}>
                    {customer.email}
                </Link>
            ),
            id: "customer.email",
            cell: (info) => info.getValue(),
        },
        {
            header: "message",
            footer: (props) => props.column.id,
            accessorFn: ({ message }) => message,
            id: "message",
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
            <TableV2<Contact>
                data={data}
                columns={columns}
                links={links}
                showCreateButton={false}
            />
        </AuthenticatedLayout>
    );
}
