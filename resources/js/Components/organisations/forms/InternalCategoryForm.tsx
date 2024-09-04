import IconButton from "@/Components/atoms/IconButton";
import InternalCategory, {
    type InternalCategoryForm,
} from "@/Interfaces/InternalCategory";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FC, FormEventHandler } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const InternalCategoryForm: FC<{
    category?: InternalCategory;
}> = ({ category }) => {
    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<InternalCategoryForm>({
        label: category?.label ?? "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (category) {
            return patch(
                route("dashboard.internal-categories.update", category.id)
            );
        }

        return post(route("dashboard.internal-categories.store"));
    };

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Header>
                <IconButton
                    icon="arrow-left"
                    variant="link"
                    size="sm"
                    className="p-0"
                    onClick={() => history.back()}
                />
                <div className="mt-3">
                    <h4>
                        {!!category
                            ? "Modification de la catégorie"
                            : "Création d'une catégorie"}
                    </h4>
                    <p className="mb-0 fs-6">
                        {!!category
                            ? `Catégorie numéro ${category.id}`
                            : "Remplissez les informations de la catégorie"}
                    </p>
                </div>
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={submit}>
                    <Row className="g-3">
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="label">
                                    Label <span className="text-danger">*</span>{" "}
                                    :
                                </Form.Label>
                                <Form.Control
                                    id="label"
                                    name="label"
                                    isInvalid={!!errors.label}
                                    value={data.label}
                                    onChange={(e) =>
                                        setData("label", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.label}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={12} className="mt-4">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={processing}
                            >
                                Sauvegarder
                            </Button>
                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">Saved.</p>
                            </Transition>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default InternalCategoryForm;
