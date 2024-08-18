import React from "react";
import { Collapse } from "react-bootstrap";
import Image from "@/Assets/images/about.png";

export default function About() {
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
                                À propos de{" "}
                                <span className="text-primary">moi</span>
                            </h2>
                            <p>
                                Je suis le Dr Claude Allouche,
                                gynécologue-obstétricien à Raanana et Netanya,
                                avec de nombreuses années d'expérience et un
                                parcours remarquable dans les différents
                                domaines de ma spécialité.
                            </p>
                            <p>
                                De Formation française, après avoir fait mes
                                études de médecine à Paris et mon internat de
                                Gynecologie obstétrique à Caen , j’ai travaillé
                                pendant plus de 25 ans en tant que praticien
                                hospitalier à l’hôpital d’Évreux en Normandie,
                                où j’ai dirigé le pôle Femme-mère-enfants des
                                hôpitaux d’Évreux et de Vernon.
                            </p>
                            <p>
                                Après avoir fait mon alya fin 2018 je travaille
                                désormais comme médecin-gynécologue obstétricien
                                en Israel à l'hôpital Laniado , à la koupat
                                holim Clalit de Netanya et dans mon cabinet de
                                la clinique Ahuza à Raanana . Dans ma clinique
                                de Raanana, une gamme de services est proposée,
                                notamment
                            </p>
                            <Collapse in={open}>
                                <div>
                                    <p>
                                        Le suivi gynécologiques avec pose de
                                        stérilet , suivi de contraception,
                                        realisation de frottis, échographies
                                        gynécologiques. Le suivi de la
                                        grossesse, les échographies
                                        obstétricales et le traitement des
                                        femmes enceintes.
                                    </p>
                                </div>
                            </Collapse>
                            <a href="#!" onClick={onClick} aria-expanded={open}>
                                Voir {open ? "moins" : "plus"}
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
                                <span className="ms-2">
                                    Suivis gynécologiques avec pose de stérilet
                                    , suivi de contraception, realisation de
                                    frottis, échographies gynécologiques
                                </span>
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
                                <span className="ms-2">
                                    Le suivi de la grossesse, les échographies
                                    obstétricales et le traitement des femmes
                                    enceintes
                                </span>
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
                                <span className="ms-2">
                                    Le suivi et le traitement de la ménopause.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img
                                src={Image}
                                alt="events"
                                className="img-fluid rounded-3"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
