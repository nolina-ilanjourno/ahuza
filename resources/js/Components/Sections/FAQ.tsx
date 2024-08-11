import type IFAQ from "@/Interfaces/FAQ";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
    const { faqs } = usePage<
        PageProps<{
            faqs: IFAQ[];
        }>
    >().props;

    return (
        <section id="faq" className="mb-xl-9 mb-4">
            {faqs.length > 0 && (
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
                            <Accordion
                                defaultActiveKey={"0"}
                                id="accordionExample"
                            >
                                {faqs.map((faq, index: number) => (
                                    <Accordion.Item
                                        key={index}
                                        eventKey={index.toString()}
                                    >
                                        <Accordion.Header>
                                            {
                                                faq.traductions[0].traduction
                                                    .question
                                            }
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {
                                                faq.traductions[0].traduction
                                                    .answer
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            )}
        </section>
    );
};

export default FAQ;
