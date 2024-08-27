import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import Article from "@/Interfaces/Article";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import classNames from "classnames";
import { Trash2 } from "lucide-react";
import { DateTime } from "luxon";
import { FC, Fragment, useRef } from "react";

const ArticlesView: FC<
    PageProps<{
        articles: PaginatedData<Article>;
    }>
> = ({
    auth,
    articles: {
        data,
        meta: { links },
    },
}) => {
    const onTrigger = (id: string, forDelete: boolean = false) => {
        if (
            forDelete &&
            confirm("Êtes-vous sûr de vouloir supprimer cet article ?")
        ) {
            return router.delete(route("dashboard.articles.destroy", id));
        } else if (
            confirm("Êtes-vous sûr de vouloir restaurer cet article ?")
        ) {
            return router.put(route("dashboard.articles.restore", id));
        }
    };

    const columns: ColumnDef<Article>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id, deleted_at }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        className="me-1"
                        href={route("dashboard.articles.edit", id)}
                    />
                    <IconButton
                        size="sm"
                        icon={deleted_at ? "refresh-cw" : "trash-2"}
                        color="white"
                        variant={deleted_at ? "success" : "danger"}
                        onClick={() => onTrigger(id, !deleted_at)}
                    />
                </Fragment>
            ),
            cell: (info) => info.getValue(),
        },
        {
            header: "Title",
            footer: (props) => props.column.id,
            accessorFn: ({ title, deleted_at }) => (
                <div className="d-flex align-items-center">
                    {title}
                    {deleted_at && <Trash2 size={16} className="ms-1" />}
                </div>
            ),
            id: "title",
            cell: (info) => info.getValue(),
        },
        {
            header: "Catégories",
            footer: (props) => props.column.id,
            accessorFn: ({ categories }) =>
                categories.map((category, index) => (
                    <span
                        key={category.id}
                        style={{
                            backgroundColor: category.background_color,
                            color: category.text_color,
                        }}
                        className={classNames("badge badge-pill", {
                            "ms-1": index > 0,
                        })}
                    >
                        {category.label}
                    </span>
                )),
            id: "categories",
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
            <TableV2<Article>
                data={data}
                columns={columns}
                links={links}
                trashed
                published
                internal
            />
        </AuthenticatedLayout>
    );
};

export default ArticlesView;
