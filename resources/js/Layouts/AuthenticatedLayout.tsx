import Footer from "@/Components/Layouts/Footer";
import Navigation from "@/Components/Layouts/Navbar";
import { User } from "@/types";
import { Fragment, PropsWithChildren, ReactNode } from "react";
import Avatar from "@/Assets/images/avatar.jpeg";
import { Link } from "@inertiajs/react";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <Fragment>
            <Navigation transparent={false} />
            <div className="h-100 bg-gray-100">
                <section className="py-lg-7 py-5 bg-light-subtle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="d-flex align-items-center mb-4 justify-content-center justify-content-md-start">
                                    <img
                                        src={Avatar}
                                        alt="avatar"
                                        className="avatar avatar-lg rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <h5 className="mb-0">{user.name}</h5>
                                    </div>
                                </div>
                                <div className="d-md-none text-center d-grid">
                                    <button
                                        className="btn btn-light mb-3 d-flex align-items-center justify-content-between"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseAccountMenu"
                                        aria-expanded="false"
                                        aria-controls="collapseAccountMenu"
                                    >
                                        Account Menu
                                        <i className="bi bi-chevron-down ms-2"></i>
                                    </button>
                                </div>
                                <div
                                    className="collapse d-md-block"
                                    id="collapseAccountMenu"
                                >
                                    <ul className="nav flex-column nav-account">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("categories.index")}
                                            >
                                                <i className="align-bottom bx bx-user"></i>
                                                <span className="ms-2">
                                                    Categories
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("faqs.index")}
                                            >
                                                <i className="align-bottom bx bx-user"></i>
                                                <span className="ms-2">
                                                    FAQ
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("articles.index")}
                                            >
                                                <i className="align-bottom bx bx-user"></i>
                                                <span className="ms-2">
                                                    Articles
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("profile.edit")}
                                            >
                                                <i className="align-bottom bx bx-user"></i>
                                                <span className="ms-2">
                                                    Mon profile
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("logout")}
                                            >
                                                <i className="align-bottom bx bx-user"></i>
                                                <span className="ms-2">
                                                    Se déconnecter
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">{children}</div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Fragment>
    );
}
