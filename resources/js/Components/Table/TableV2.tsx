import { capitalizeFirstLetter } from "@/Helpers/utils";
import { MetaLinks } from "@/Interfaces/PaginatedData";
import { Link, router, usePage } from "@inertiajs/react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { pickBy } from "lodash";
import { Fragment, PropsWithoutRef, useEffect, useRef, useState } from "react";
import {
    Table as BootstrapTable,
    Button,
    Card,
    Col,
    Dropdown,
    InputGroup,
    Nav,
    Row,
} from "react-bootstrap";
import { usePrevious } from "react-use";
import Icon from "../atoms/Icon";
import IconButton from "../atoms/IconButton";
import FieldGroup from "../Form/FieldGroup";
import SelectInput from "../Form/SelectInput";
import TextInput from "../Form/TextInput";

interface TableProps<D> {
    data: D[];
    columns: ColumnDef<D>[];
    links: MetaLinks[];
    trashed?: boolean;
}

export default function TableV2<D>({
    data,
    columns,
    links,
    trashed = false,
}: PropsWithoutRef<TableProps<D>>) {
    const entity = useRef<string | undefined>(
        route().current()?.split(".").slice(0, -1).join(".")
    ).current;

    const currentTitle = useRef<string>(
        capitalizeFirstLetter(
            route().current()?.split(".").slice(1, -1).join(" ") || "Table"
        )
    ).current;
    const { filters } = usePage<{
        filters: { search?: string; trashed?: string };
    }>().props;
    const [opened, setOpened] = useState<boolean>(false);

    const [values, setValues] = useState({
        search: filters.search || "",
        ...(trashed && { trashed: filters.trashed || "" }),
    });

    const prevValues = usePrevious(values);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [name]: value,
        }));

        if (opened) setOpened(false);
    };

    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};
            router.get(route(route().current() as string), query, {
                replace: true,
                preserveState: true,
                preserveScroll: true,
            });
        }
    }, [values]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Row className="gx-3">
            <Col xl={12}>
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Row className="flex-between-center gy-2 px-x1">
                            {currentTitle && (
                                <Col xs="auto" className="pe-0">
                                    <h6 className="mb-0">{currentTitle}</h6>
                                </Col>
                            )}
                            <Col xs="auto">
                                <InputGroup className="position-relative input-search-width">
                                    <TextInput
                                        size="sm"
                                        name="search"
                                        autoComplete="off"
                                        className="shadow-none"
                                        placeholder="Rechercher ..."
                                        value={values.search}
                                        onChange={handleChange}
                                    />
                                    <Button
                                        size="sm"
                                        variant="outline-primary"
                                        className="border-300 hover-border-primary"
                                    >
                                        <Icon name="search" size={16} />
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className="border-bottom border-200 my-3"></div>
                        <div className="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
                            {trashed && (
                                <Fragment>
                                    <Dropdown
                                        align="end"
                                        className="btn-reveal-trigger d-inline-block"
                                    >
                                        <Dropdown.Toggle
                                            as={IconButton}
                                            icon="filter"
                                            split
                                            variant="primary"
                                            size="sm"
                                        >
                                            Filtres
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu
                                            className="p-3 mt-2 bg-white rounded shadow-lg border"
                                            style={{
                                                width: 300,
                                            }}
                                        >
                                            <FieldGroup
                                                label="Trashed"
                                                name="trashed"
                                            >
                                                <SelectInput
                                                    name="trashed"
                                                    value={values.trashed}
                                                    onChange={handleChange}
                                                    options={[
                                                        {
                                                            value: "",
                                                            label: "Without Trashed",
                                                        },
                                                        {
                                                            value: "with",
                                                            label: "With Trashed",
                                                        },
                                                        {
                                                            value: "only",
                                                            label: "Only Trashed",
                                                        },
                                                    ]}
                                                />
                                            </FieldGroup>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div
                                        className="bg-primary mx-3"
                                        style={{ width: 1, height: 29 }}
                                    ></div>
                                </Fragment>
                            )}
                            <IconButton
                                variant="primary"
                                size="sm"
                                icon={"plus"}
                                href={route(`${entity}.create`)}
                                overlayTitle="Créer un nouvel article"
                                iconAlign="middle"
                            >
                                <span className="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">
                                    Nouveau
                                </span>
                            </IconButton>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <BootstrapTable responsive className="mb-0">
                            <thead className="bg-light">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td
                                                key={cell.id}
                                                className="white-space-nowrap align-middle"
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </BootstrapTable>
                    </Card.Body>
                    <Card.Footer as={Nav}>
                        <ul className="pagination mb-0">
                            {links.map((link, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={classNames("page-item", {
                                            active: link.active,
                                            disabled: link.url === null,
                                        })}
                                    >
                                        {link.url === null ? (
                                            <span
                                                className="page-link"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        ) : (
                                            <Link
                                                href={link.url}
                                                className="page-link"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
}
