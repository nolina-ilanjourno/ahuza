import Contact from "@/Interfaces/Contact";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { DateTime } from "luxon";
import { FC } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const ContactShow: FC<
    PageProps<{
        contact: Contact;
    }>
> = ({ contact, auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Card className="border-0 shadow-sm mb-4">
                <Card.Header>
                    <Link href={route("dashboard.contacts.index")}>
                        <ArrowLeft size={16} />
                    </Link>
                    <div className="mt-3">
                        <h4>
                            Message de {contact.customer.fullname}{" "}
                            <small className="text-muted">
                                {DateTime.fromISO(
                                    contact.created_at
                                ).toLocaleString()}
                            </small>
                        </h4>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="fullname">
                                    Nom complet :
                                </Form.Label>
                                <Form.Control
                                    name="fullname"
                                    value={contact.customer.fullname}
                                    autoFocus
                                    autoComplete="off"
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email :</Form.Label>
                                <Form.Control
                                    name="email"
                                    value={contact.customer.email}
                                    autoFocus
                                    autoComplete="off"
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="message">
                                    Message :
                                </Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    name="message"
                                    value={contact.message}
                                    autoFocus
                                    autoComplete="off"
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </AuthenticatedLayout>
    );
};

export default ContactShow;
