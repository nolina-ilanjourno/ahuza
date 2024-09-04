import IconButton from "@/Components/atoms/IconButton";
import Customer, { type CustomerForm } from "@/Interfaces/Customer";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FC, FormEventHandler } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CustomerForm: FC<{
    customer?: Customer;
}> = ({ customer }) => {
    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<CustomerForm>({
        fullname: customer?.fullname ?? "",
        email: customer?.email ?? "",
        phone: customer?.phone ?? "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (customer) {
            return patch(route("dashboard.customers.update", customer.id));
        }

        return post(route("dashboard.customers.store"));
    };

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Header>
                <IconButton
                    icon="arrow-left"
                    variant="link"
                    size="sm"
                    className="p-0"
                    onClick={() => history.back()}
                />
                <div className="mt-3">
                    <h4>
                        {!!customer
                            ? "Modification du client"
                            : "Création d'un client"}
                    </h4>
                    <p className="mb-0 fs-6">
                        {!!customer
                            ? `Client numéro ${customer.id}`
                            : "Remplissez les informations du client"}
                    </p>
                </div>
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={submit}>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="fullname">
                                    Nom complet{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Form.Control
                                    id="fullname"
                                    name="fullname"
                                    isInvalid={!!errors.fullname}
                                    value={data.fullname}
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.fullname}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="email">
                                    Email <span className="text-danger">*</span>{" "}
                                    :
                                </Form.Label>
                                <Form.Control
                                    id="email"
                                    name="email"
                                    type="email"
                                    isInvalid={!!errors.email}
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="phone">
                                    Numéro de téléphone :
                                </Form.Label>
                                <Form.Control
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    isInvalid={!!errors.phone}
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={12} className="mt-4">
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
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default CustomerForm;
