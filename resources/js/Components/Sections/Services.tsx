import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Card from "@/Assets/images/landings/finance/card.svg";
import Tab1 from "@/Assets/images/landings/finance/finance-tab-1.jpg";
import Tab2 from "@/Assets/images/landings/finance/finance-tab-2.jpg";
import Tab3 from "@/Assets/images/landings/finance/finance-tab-3.jpg";

export default function Services() {
    return (
        <section className="my-xl-9 my-5">
            <Container>
                <Tab.Container defaultActiveKey="v-pills-small-business">
                    <Row>
                        <Col lg={8} className="offset-lg-2">
                            <div className="text-center mb-xl-7 mb-5">
                                <h2 className="mb-3">
                                    Ahuza Clinic à{" "}
                                    <span className="text-primary">
                                        Ra'anana.
                                    </span>
                                </h2>
                                <p className="mb-0">
                                    Dans ma clinique Ahuza Clinic à Ra'anana,
                                    j'accompagne mes patientes avec flexibilité
                                    et patience, une attention personnelle et
                                    une grande disponibilité tout au long des 3
                                    périodes de la vie d’une femme :
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xl={5} md={6}>
                            <Nav
                                variant="pills"
                                className="flex-column mb-5 mb-lg-0"
                                id="v-pills-tab"
                                role="tablist"
                                defaultActiveKey={"v-pills-small-business"}
                                aria-orientation="vertical"
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="v-pills-small-business"
                                        className="d-flex text-start align-items-center align-items-lg-start p-xl-4 p-3"
                                    >
                                        <div className="d-flex">
                                            <div className="icon-md icon-shape rounded-circle bg-white shadow-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    fill="currentColor"
                                                    className="bi bi-bank2 text-primary"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ms-4">
                                            <h4 className="mb-0">
                                                Avant les grossesses{" "}
                                            </h4>
                                            <p className="mb-0 mt-lg-3 d-none d-lg-block">
                                                Pour assurer le suivi
                                                gynécologique, la réalisation de
                                                frottis et la mise en place
                                                d’une contraception
                                                personnalisée adaptée à chacune
                                                d’entre vous.
                                            </p>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="v-pills-profile"
                                        className="d-flex text-start align-items-center align-items-lg-start p-xl-4 p-3"
                                    >
                                        <div className="d-flex">
                                            <div className="icon-md icon-shape rounded-circle bg-white shadow-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    fill="currentColor"
                                                    className="bi bi-credit-card-2-front-fill text-primary"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ms-4">
                                            <h4 className="mb-0">
                                                Pendant la grossesse
                                            </h4>
                                            <p className="mb-0 mt-lg-3 d-none d-lg-block">
                                                Où le suivi sera également
                                                personnalisé avec des
                                                explications claires en français
                                                sur les différentes étapes que
                                                nous traverserons ensemble les 9
                                                prochains mois.
                                            </p>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="v-pills-enterprises"
                                        className="d-flex text-start p-xl-4 p-3 align-items-center align-items-lg-start"
                                    >
                                        <div className="d-flex">
                                            <div className="icon-md icon-shape rounded-circle bg-white shadow-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    fill="currentColor"
                                                    className="bi bi-cash-stack text-primary"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ms-4">
                                            <h4 className="mb-0">
                                                Et la ménopause
                                            </h4>
                                            <p className="mb-0 mt-lg-3 d-none d-lg-block">
                                                Période charnière de la vie
                                                d’une femme, au cours de
                                                laquelle vous avez plus que
                                                jamais besoin d’être accompagnée
                                                par des conseils avisés, et
                                                parfois des traitements
                                                médicaux.
                                            </p>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xl={6} className="offset-xl-1" md={6}>
                            <Tab.Content>
                                <Tab.Pane eventKey="v-pills-small-business">
                                    <div className="position-relative scene">
                                        <figure>
                                            <img
                                                src={Tab1}
                                                alt="finance"
                                                className="img-fluid rounded-3"
                                            />
                                        </figure>
                                        <div
                                            className="position-relative"
                                            data-depth="0.05"
                                        >
                                            <img
                                                src={Card}
                                                alt=""
                                                className="position-absolute bottom-0 end-0 px-4"
                                            />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="v-pills-profile">
                                    <div className="position-relative scene">
                                        <figure>
                                            <img
                                                src={Tab2}
                                                alt="finance"
                                                className="img-fluid rounded-3"
                                            />
                                        </figure>
                                        <div
                                            className="position-relative"
                                            data-depth="0.05"
                                        >
                                            <img
                                                src={Card}
                                                alt=""
                                                className="position-absolute bottom-0 start-0 px-4"
                                            />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="v-pills-enterprises">
                                    <div className="position-relative scene">
                                        <figure>
                                            <img
                                                src={Tab3}
                                                alt="finance"
                                                className="img-fluid rounded-3"
                                            />
                                        </figure>
                                        <div
                                            className="position-relative"
                                            data-depth="0.05"
                                        >
                                            <img
                                                src={Card}
                                                alt=""
                                                className="position-absolute bottom-0 start-50 translate-middle-x"
                                            />
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
}
