import AboutImage from "@/Assets/images/about.jpeg";
import useTranslation from "@/Hooks/useTranslation";
import React from "react";
import { Collapse, Image } from "react-bootstrap";

export default function About() {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState<boolean>(false);

    const onClick = (event: any) => {
        event?.preventDefault();
        setOpen(!open);
    };

    return (
        <section id="about" className="my-xl-9 my-5">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="mb-5">
                            <h2 className="mb-3">
                                {t("aboutOf")}{" "}
                                <span className="text-primary">{t("me")}</span>
                            </h2>
                            <p>{t("about.first")}</p>
                            <p>{t("about.second")}</p>
                            <p>{t("about.last")}</p>
                            <Collapse in={open}>
                                <div>
                                    <p>{t("about.plus")}</p>
                                </div>
                            </Collapse>
                            <a href="#!" onClick={onClick} aria-expanded={open}>
                                {t("see")} {open ? t("less") : t("plus")}
                                <span className="ms-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <ul className="mt-5 list-unstyled">
                            <li className="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-check-circle-fill text-primary"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                <span className="ms-2">{t("about.tab1")}</span>
                            </li>
                            <li className="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-check-circle-fill text-primary"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                <span className="ms-2">{t("about.tab2")}</span>
                            </li>
                            <li className="mb-3 d-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-check-circle-fill text-primary"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                <span className="ms-2">{t("about.tab3")}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <Image
                                src={AboutImage}
                                alt="events"
                                fluid
                                className="rounded-3"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
