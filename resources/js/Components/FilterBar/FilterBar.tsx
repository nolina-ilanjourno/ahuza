import { router, usePage } from "@inertiajs/react";
import pickBy from "lodash/pickBy";
import { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { usePrevious } from "react-use";
import FieldGroup from "../Form/FieldGroup";
import SelectInput from "../Form/SelectInput";
import TextInput from "../Form/TextInput";

export default function FilterBar() {
    const { filters } = usePage<{
        filters: { search?: string; trashed?: string };
    }>().props;

    const [opened, setOpened] = useState(false);

    const [values, setValues] = useState({
        search: filters.search || "",
        trashed: filters.trashed || "",
    });

    const prevValues = usePrevious(values);

    function reset() {
        setValues({
            search: "",
            trashed: "",
        });
    }

    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};
            router.get(route(route().current() as string), query, {
                replace: true,
                preserveState: true,
            });
        }
    }, [values]);

    function handleChange(e: any) {
        const name = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [name]: value,
        }));

        if (opened) setOpened(false);
    }

    return (
        <div className="d-flex align-items-center">
            <div className="d-flex bg-white rounded shadow">
                <Dropdown show={opened} onToggle={() => setOpened(!opened)}>
                    <Dropdown.Toggle
                        onClick={() => setOpened(true)}
                        variant="link"
                        className="border-1"
                    >
                        Filtres
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="p-3 mt-2 bg-white rounded shadow-lg"
                        style={{
                            width: 300,
                        }}
                    >
                        <FieldGroup label="Trashed" name="trashed">
                            <SelectInput
                                name="trashed"
                                value={values.trashed}
                                onChange={handleChange}
                                options={[
                                    { value: "", label: "" },
                                    { value: "with", label: "With Trashed" },
                                    { value: "only", label: "Only Trashed" },
                                ]}
                            />
                        </FieldGroup>
                    </Dropdown.Menu>
                </Dropdown>
                <TextInput
                    name="search"
                    placeholder="Rechercher..."
                    autoComplete="off"
                    value={values.search}
                    onChange={handleChange}
                    className="border-0"
                />
            </div>
            <Button
                variant="link"
                onClick={reset}
                className="text-sm text-gray-600"
            >
                Reset
            </Button>
        </div>
    );
}
