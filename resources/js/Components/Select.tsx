import { dot } from "@/Helpers/SelectHelpers";
import { FC, Fragment } from "react";
import { Form } from "react-bootstrap";
import {
    AsyncPaginate,
    WithAsyncPaginateType,
} from "react-select-async-paginate";

const Select: WithAsyncPaginateType = ({ styles, ...props }) => {
    return (
        <Fragment>
            <AsyncPaginate
                styles={{
                    menu: (base) => ({
                        ...base,
                        zIndex: 9999, // Maximum zIndex for the dropdown menu
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: "#6c757d",
                        fontSize: "0.875rem",
                    }),
                    control: (base, p) => ({
                        ...base,
                        ...styles?.control?.(base, p),
                        minHeight: "2.25rem",
                        fontSize: "0.875rem",
                        borderColor: props["aria-errormessage"]
                            ? "#dc3545"
                            : base.borderColor,
                        "&:hover": {
                            borderColor: props["aria-errormessage"]
                                ? "#dc3545"
                                : base.borderColor,
                        },
                        boxShadow: props["aria-errormessage"]
                            ? "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
                            : base.boxShadow,
                    }),
                    option: (base, { data, isDisabled }) => ({
                        ...base,
                        cursor: isDisabled ? "not-allowed" : "red",
                        // @ts-ignore
                        ...(data.background_color &&
                            // @ts-ignore
                            dot(data.background_color, true)),
                        fontSize: "0.875rem",
                    }),
                    multiValue: (base, { data }) => ({
                        ...base,
                        // @ts-ignore
                        ...(data.background_color &&
                            // @ts-ignore
                            dot(data.background_color)),
                        fontSize: "0.875rem",
                    }),
                    singleValue: (base, { data }) => ({
                        ...base,
                        // @ts-ignore
                        ...(data.background_color &&
                            // @ts-ignore
                            dot(data.background_color)),
                        fontSize: "0.875rem",
                    }),
                }}
                placeholder="Choisir..."
                noOptionsMessage={() => "Pas de donnée(s) trouvée(s)"}
                loadingMessage={() => "Chargement..."}
                closeMenuOnSelect={!props.isMulti}
                {...props}
            />
            {!!props["aria-errormessage"] && (
                <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                >
                    {props["aria-errormessage"]}
                </Form.Control.Feedback>
            )}
        </Fragment>
    );
};
export default Select;
