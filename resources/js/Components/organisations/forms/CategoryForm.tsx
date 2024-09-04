import IconButton from "@/Components/atoms/IconButton";
import SelectInput from "@/Components/Form/SelectInput";
import LANGUES from "@/Constants/langues";
import Category, { type CategoryForm } from "@/Interfaces/Category";
import { Transition } from "@headlessui/react";
import { Link, useForm } from "@inertiajs/react";
import classNames from "classnames";
import { ArrowLeft } from "lucide-react";
import React, { FC, FormEventHandler, Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CategoryForm: FC<{
    category?: Category;
}> = ({ category }) => {
    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<CategoryForm>({
        label: category?.label ?? "",
        background_color: category?.background_color ?? "#cce6ce",
        text_color: category?.text_color ?? "#003303",
        traductions: category?.traductions ?? [
            {
                id: Math.random().toString(),
                traduction: "",
                langue: "fr",
            },
        ],
    });

    const addTraduction = () => {
        setData("traductions", [
            ...data.traductions,
            {
                id: Math.random().toString(),
                traduction: "",
                langue: "fr",
            },
        ]);
    };

    const setDataTraduction = (index: number, e: React.ChangeEvent<any>) => {
        setData("traductions", [
            ...data.traductions.slice(0, index),
            {
                ...data.traductions[index],
                [e.target.name]: e.target.value,
            },
            ...data.traductions.slice(index + 1),
        ]);
    };

    const removeTraduction = (index: number) => {
        setData(
            "traductions",
            data.traductions.filter((_, i) => i !== index)
        );
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (category) {
            return patch(route("dashboard.categories.update", category.id));
        }

        return post(route("dashboard.categories.store"));
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
                        <Col md={6}>
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
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="background_color">
                                    Couleur de fond{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Form.Control
                                    type="color"
                                    id="background_color"
                                    name="background_color"
                                    className="w-100"
                                    isInvalid={!!errors.background_color}
                                    value={data.background_color}
                                    onChange={(e) =>
                                        setData(
                                            "background_color",
                                            e.target.value
                                        )
                                    }
                                    required
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.background_color}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="text_color">
                                    Couleur de texte{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Form.Control
                                    type="color"
                                    id="text_color"
                                    name="text_color"
                                    value={data.text_color}
                                    onChange={(e) =>
                                        setData("text_color", e.target.value)
                                    }
                                    className="w-100"
                                    isInvalid={!!errors.text_color}
                                    required
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.text_color}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <hr className="my-4" />
                        <Col
                            lg={12}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <h2 className="mb-0">Les traductions</h2>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={addTraduction}
                            >
                                Ajouter
                            </Button>
                        </Col>
                        {data.traductions.map(
                            ({ id, traduction, langue }, index) => (
                                <Fragment key={id}>
                                    <Col
                                        lg={12}
                                        className={classNames(
                                            "d-flex justify-content-between align-items-center",
                                            {
                                                "border-top pt-4 mt-4":
                                                    index > 0,
                                            }
                                        )}
                                    >
                                        <h4>Traduction {index + 1}</h4>
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="text-danger"
                                            onClick={() =>
                                                removeTraduction(index)
                                            }
                                        >
                                            Supprimer
                                        </Button>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Form.Group>
                                            <Form.Label
                                                htmlFor={`traduction_${index}`}
                                            >
                                                Traduction{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                :
                                            </Form.Label>
                                            <Form.Control
                                                className="w-full"
                                                id={`traduction_${index}`}
                                                name={`traduction`}
                                                value={traduction}
                                                isInvalid={!!errors.traductions}
                                                onChange={(e) =>
                                                    setDataTraduction(index, e)
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.traductions}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Form.Group>
                                            <Form.Label
                                                htmlFor={`langue_${index}`}
                                            >
                                                Langue{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                :
                                            </Form.Label>
                                            <SelectInput
                                                id={`langue_${index}`}
                                                name={`langue`}
                                                aria-errormessage={
                                                    errors.traductions
                                                }
                                                value={langue}
                                                options={LANGUES}
                                                onChange={(e) =>
                                                    setDataTraduction(index, e)
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Fragment>
                            )
                        )}
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

export default CategoryForm;
