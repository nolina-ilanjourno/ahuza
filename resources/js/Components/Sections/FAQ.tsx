import { Accordion, Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
    return (
        <section id="faq" className="mb-xl-9 mb-4">
            <Container>
                <Row>
                    <Col lg={10} className="offset-lg-1 col-md-12 col-12">
                        <div className="text-center mb-7">
                            <h2>Questions fréquemment posées</h2>
                            <p className="mb-0">
                                Vous ne trouvez pas ce que vous cherchez ?{" "}
                                <br />
                                <a href="#" className="text-primary">
                                    Contactez moi
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className="offset-lg-1 col-md-12 col-12">
                        <Accordion defaultActiveKey="1" id="accordionExample">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Est-ce que le Dr Allouche sera présent pour
                                    mon accouchement?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quae harum adipisci
                                    possimus et. Iusto pariatur iste nam
                                    incidunt ratione modi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Est-ce que le docteur Allouche pourra
                                    réaliser ma césarienne si elle est
                                    programmée ?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quae harum adipisci
                                    possimus et. Iusto pariatur iste nam
                                    incidunt ratione modi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Combien coûte la consultation ?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quae harum adipisci
                                    possimus et. Iusto pariatur iste nam
                                    incidunt ratione modi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Est-ce que la Consultation est remboursée
                                    par mon assurance ou ma koupat holim?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quae harum adipisci
                                    possimus et. Iusto pariatur iste nam
                                    incidunt ratione modi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    Est-ce que le docteur Allouche réalise les
                                    échographies Obstetricales ?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quae harum adipisci
                                    possimus et. Iusto pariatur iste nam
                                    incidunt ratione modi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    Est-ce que le docteur Allouche réalise les
                                    échographies gynécologiques ?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quae harum adipisci
                                    possimus et. Iusto pariatur iste nam
                                    incidunt ratione modi.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQ;
