import SelectInput from "@/Components/Form/SelectInput";
import LANGUES from "@/Constants/langues";
import FAQ, { type FAQForm } from "@/Interfaces/FAQ";
import { Transition } from "@headlessui/react";
import { Link, useForm } from "@inertiajs/react";
import classNames from "classnames";
import { ArrowLeft } from "lucide-react";
import React, { FC, FormEventHandler, Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const FAQForm: FC<{
    faq?: FAQ;
}> = ({ faq }) => {
    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<FAQForm>({
        label: faq?.label ?? "",
        traductions: faq?.traductions ?? [
            {
                id: Math.random().toString(),
                traduction: {
                    answer: "",
                    question: "",
                },
                langue: "fr",
            },
        ],
    });

    const addTraduction = () => {
        setData("traductions", [
            ...data.traductions,
            {
                id: Math.random().toString(),
                traduction: {
                    answer: "",
                    question: "",
                },
                langue: "",
            },
        ]);
    };

    const setDataTraductions = (index: number, e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;

        const newTraductions = [...data.traductions];
        if (name === "question" || name === "answer") {
            newTraductions[index] = {
                ...newTraductions[index],
                traduction: {
                    ...newTraductions[index].traduction!,
                    [name]: value,
                },
            };
        } else if (name === "langue") {
            newTraductions[index] = {
                ...newTraductions[index],
                [name]: value,
            };
        }

        setData("traductions", newTraductions);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (faq) {
            return patch(route("dashboard.faqs.update", faq.id));
        }

        return post(route("dashboard.faqs.store"));
    };

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Header>
                <Link href={route("dashboard.faqs.index")}>
                    <ArrowLeft size={16} />
                </Link>
                <div className="mt-3">
                    <h4>
                        {!!faq
                            ? "Modification de la FAQ"
                            : "Création d'une FAQ"}
                    </h4>
                    <p className="mb-0 fs-6">
                        {!!faq
                            ? `FAQ numéro ${faq.id}`
                            : "Remplissez les informations de la FAQ"}
                    </p>
                </div>
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={submit}>
                    <Row className="g-3">
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="label">
                                    Label <span className="text-danger">*</span>{" "}
                                    :
                                </Form.Label>
                                <Form.Control
                                    id="label"
                                    name="label"
                                    isInvalid={!!errors.label}
                                    value={data.label}
                                    onChange={(e) =>
                                        setData("label", e.target.value)
                                    }
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.label}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <hr className="my-4" />
                        <Col
                            lg={12}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <h2 className="mb-0">Les traductions</h2>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={addTraduction}
                            >
                                Ajouter
                            </Button>
                        </Col>
                        {data.traductions.map(
                            ({ id, traduction, langue }, index) => (
                                <Fragment key={id}>
                                    <Col
                                        lg={12}
                                        className={classNames(
                                            "d-flex justify-content-between align-items-center",
                                            {
                                                "border-top pt-4 mt-4":
                                                    index > 0,
                                            }
                                        )}
                                    >
                                        <h4>Traduction {index + 1}</h4>
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="text-danger"
                                            onClick={() =>
                                                setData(
                                                    "traductions",
                                                    data.traductions.filter(
                                                        (_, i) => i !== index
                                                    )
                                                )
                                            }
                                        >
                                            Supprimer
                                        </Button>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Form.Group>
                                            <Form.Label
                                                htmlFor={`question_${index}`}
                                            >
                                                Question{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                :
                                            </Form.Label>
                                            <Form.Control
                                                className="w-full"
                                                id={`question_${index}`}
                                                name={`question`}
                                                value={traduction?.question}
                                                isInvalid={!!errors.traductions}
                                                onChange={(e) =>
                                                    setDataTraductions(index, e)
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.traductions}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Form.Group>
                                            <Form.Label
                                                htmlFor={`langue_${index}`}
                                            >
                                                Langue{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                :
                                            </Form.Label>
                                            <SelectInput
                                                id={`langue_${index}`}
                                                name={`langue`}
                                                aria-errormessage={
                                                    errors.traductions
                                                }
                                                value={langue}
                                                options={LANGUES}
                                                onChange={(e) =>
                                                    setDataTraductions(index, e)
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label
                                                htmlFor={`answer_${index}`}
                                            >
                                                Réponse{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>{" "}
                                                :
                                            </Form.Label>
                                            <Form.Control
                                                as={"textarea"}
                                                className="w-full"
                                                id={`answer_${index}`}
                                                name={`answer`}
                                                value={traduction?.answer}
                                                isInvalid={!!errors.traductions}
                                                onChange={(e) =>
                                                    setDataTraductions(index, e)
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.traductions}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Fragment>
                            )
                        )}
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

export default FAQForm;
