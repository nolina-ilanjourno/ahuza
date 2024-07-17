import Logo from "@/Assets/images/logo.jpeg";
import Illustration from "@/Assets/images/sign-in/authentication-img.jpg";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, Fragment, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Fragment>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="position-relative h-100">
                <div className="container d-flex flex-wrap justify-content-center vh-100 align-items-center w-lg-50 position-lg-absolute">
                    <div className="row justify-content-center">
                        <div className="w-100 align-self-end col-12">
                            <div className="text-center mb-7">
                                <a href="index.html">
                                    <img
                                        src={Logo}
                                        alt="brand"
                                        width={150}
                                        className="mb-3"
                                    />
                                </a>
                                <h1 className="mb-1">Welcome Back</h1>
                            </div>
                            <Form
                                className="needs-validation mb-6"
                                noValidate
                                onSubmit={submit}
                            >
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="signinEmailInput">
                                        Email
                                        <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        isInvalid={!!errors.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        autoFocus
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="signinEmailInput">
                                        Password
                                        <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        name="password"
                                        isInvalid={!!errors.password}
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="form-check">
                                            <Form.Check
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData(
                                                        "remember",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="rememberMeCheckbox"
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        {canResetPassword && (
                                            <div>
                                                <Link
                                                    href={route(
                                                        "password.request"
                                                    )}
                                                    className="text-primary"
                                                >
                                                    Forgot Password
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <Button
                                        className="btn btn-primary"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Sign In
                                    </Button>
                                </div>
                            </Form>

                            <div className="text-center mt-7">
                                <div className="small mb-3 mb-lg-0 text-body-tertiary">
                                    Copyright ©
                                    <span className="text-primary">
                                        <a href="#">Block Bootstrap 5 Theme</a>
                                    </span>
                                    | Designed by
                                    <span className="text-primary">
                                        <a href="#">CodesCandy</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="position-fixed top-0 end-0 w-50 h-100 d-none d-lg-block vh-100"
                    style={{
                        background: `url(${Illustration}) center center / cover no-repeat`,
                    }}
                ></div>
            </div>
        </Fragment>
    );
}
