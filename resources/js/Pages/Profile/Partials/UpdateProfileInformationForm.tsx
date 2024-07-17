import { PageProps } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Button, Form } from "react-bootstrap";

export default function UpdateProfileInformation() {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-lg-5">
                <div className="mb-5">
                    <h4 className="mb-1">Account Information</h4>
                    <p className="mb-0 fs-6">
                        Edit your personal information and address.
                    </p>
                </div>
                <Form
                    className="row g-3 needs-validation"
                    noValidate
                    onSubmit={submit}
                >
                    <div className="col-lg-6 col-md-12">
                        <Form.Group>
                            <Form.Label htmlFor="profileFirstNameInput">
                                Nom complet
                            </Form.Label>
                            <Form.Control
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                autoFocus
                                autoComplete="name"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Form.Group>
                            <Form.Label htmlFor="profileLastNameInput">
                                Email
                            </Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                autoComplete="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
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
    );
}
