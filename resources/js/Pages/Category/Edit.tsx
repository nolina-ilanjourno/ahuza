import Category, { CategoryForm } from "@/Interfaces/Category";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import classNames from "classnames";
import { FormEventHandler, Fragment } from "react";
import { Button, Form } from "react-bootstrap";

const CategoryEditView = ({
    auth,
    category,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    category: Category;
}>) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm<CategoryForm>({
            label: category.label,
            background_color: category.background_color,
            text_color: category.text_color,
            traductions: category.traductions,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("categories.update", category.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-lg-5">
                    <div className="mb-5">
                        <h4 className="mb-1">Modification de la catégorie </h4>
                        <p className="mb-0 fs-6">
                            Edit your personal information and address.
                        </p>
                    </div>
                    <Form
                        noValidate
                        className="row g-3 needs-validation"
                        onSubmit={submit}
                    >
                        <div className="col-lg-6 col-md-12">
                            <Form.Group>
                                <Form.Label htmlFor="label">Label</Form.Label>
                                <Form.Control
                                    id="name"
                                    className="mt-1 block w-full"
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
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Form.Group>
                                <Form.Label htmlFor="profileLastNameInput">
                                    Couleur de fond
                                </Form.Label>
                                <Form.Control
                                    id="email"
                                    type="color"
                                    className="mt-1 w-100"
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
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Form.Group>
                                <Form.Label htmlFor="profileLastNameInput">
                                    Couleur de texte
                                </Form.Label>
                                <Form.Control
                                    id="email"
                                    type="color"
                                    className="mt-1 w-100"
                                    value={data.text_color}
                                    onChange={(e) =>
                                        setData("text_color", e.target.value)
                                    }
                                    required
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.text_color}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <hr className="my-4" />
                        <div className="col-12 d-flex justify-content-between align-items-center mt-0">
                            <h2 className="mb-0">Les traductions</h2>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() =>
                                    setData("traductions", [
                                        ...data.traductions,
                                        {
                                            id: Math.random().toString(),
                                            traduction: "",
                                            langue: "",
                                        },
                                    ])
                                }
                            >
                                Ajouter
                            </Button>
                        </div>
                        {data.traductions.map(
                            ({ id, traduction, langue }, index) => (
                                <Fragment key={id}>
                                    <div
                                        className={classNames(
                                            "col-12 d-flex justify-content-between align-items-center",
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
                                                setData(
                                                    "traductions",
                                                    data.traductions.filter(
                                                        (_, i) => i !== index
                                                    )
                                                )
                                            }
                                        >
                                            Supprimer
                                        </Button>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <Form.Group>
                                            <Form.Label htmlFor="profileFirstNameInput">
                                                Traduction
                                            </Form.Label>
                                            <Form.Control
                                                id="email"
                                                className="mt-1 block w-full"
                                                value={traduction}
                                                onChange={(e) =>
                                                    setData("traductions", [
                                                        ...data.traductions.slice(
                                                            0,
                                                            index
                                                        ),
                                                        {
                                                            ...data.traductions[
                                                                index
                                                            ],
                                                            traduction:
                                                                e.target.value,
                                                        },
                                                        ...data.traductions.slice(
                                                            index + 1
                                                        ),
                                                    ])
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.traductions}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <Form.Group>
                                            <Form.Label htmlFor="profileFirstNameInput">
                                                Langue
                                            </Form.Label>
                                            <Form.Control
                                                id="email"
                                                className="mt-1 block w-full"
                                                value={langue}
                                                onChange={(e) =>
                                                    setData("traductions", [
                                                        ...data.traductions.slice(
                                                            0,
                                                            index
                                                        ),
                                                        {
                                                            ...data.traductions[
                                                                index
                                                            ],
                                                            langue: e.target
                                                                .value,
                                                        },
                                                        ...data.traductions.slice(
                                                            index + 1
                                                        ),
                                                    ])
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.traductions}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </Fragment>
                            )
                        )}
                        <div className="col-12 mt-4">
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
                        </div>
                    </Form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CategoryEditView;
