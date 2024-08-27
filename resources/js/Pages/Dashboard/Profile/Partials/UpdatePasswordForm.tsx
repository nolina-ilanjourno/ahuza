import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";
import { Button, Form } from "react-bootstrap";

export default function UpdatePasswordForm() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("dashboard.password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
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
                    onSubmit={updatePassword}
                >
                    <div className="col-lg-6 col-md-12">
                        <Form.Group>
                            <Form.Label htmlFor="profileFirstNameInput">
                                Mot de passe actuel
                            </Form.Label>
                            <Form.Control
                                id="current_password"
                                ref={currentPasswordInput}
                                value={data.current_password}
                                onChange={(e) =>
                                    setData("current_password", e.target.value)
                                }
                                isInvalid={!!errors.current_password}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.current_password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Form.Group>
                            <Form.Label htmlFor="profileLastNameInput">
                                Nouveau mot de passe
                            </Form.Label>
                            <Form.Control
                                id="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                isInvalid={!!errors.password}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Form.Group>
                            <Form.Label htmlFor="profileLastNameInput">
                                Confirmation mot de passe
                            </Form.Label>
                            <Form.Control
                                id="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                isInvalid={!!errors.password_confirmation}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password_confirmation}
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
