import IconButton from "@/Components/atoms/IconButton";
import Keyword, { type KeywordForm } from "@/Interfaces/Keyword";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FC, FormEventHandler } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const KeywordForm: FC<{
    keyword?: Keyword;
}> = ({ keyword }) => {
    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<KeywordForm>({
        label: keyword?.label ?? "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            return patch(route("dashboard.keywords.update", keyword.id));
        }

        return post(route("dashboard.keywords.store"));
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
                        {!!keyword
                            ? "Modification du mot-clé"
                            : "Création d'un mot-clé"}
                    </h4>
                    <p className="mb-0 fs-6">
                        {!!keyword
                            ? `Mot-clé numéro ${keyword.id}`
                            : "Remplissez les informations du mot-clé"}
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

export default KeywordForm;
