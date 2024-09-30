import IconButton from "@/Components/atoms/IconButton";
import Select from "@/Components/Select";
import useLoadOptions from "@/Hooks/useLoadOptions";
import KeywordGroup, { type KeywordGroupForm } from "@/Interfaces/KeywordGroup";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FC, FormEventHandler } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const KeywordGroupForm: FC<{
    keywordGroup?: KeywordGroup;
}> = ({ keywordGroup }) => {
    const { loadKeywordsLazy } = useLoadOptions();
    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<KeywordGroupForm>({
        label: keywordGroup?.label ?? "",
        keyword_ids: keywordGroup?.keywords.map((keyword) => keyword.id) ?? [],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (keywordGroup) {
            return patch(
                route("dashboard.keyword-groups.update", keywordGroup.id)
            );
        }

        return post(route("dashboard.keyword-groups.store"));
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
                        {!!keywordGroup
                            ? "Modification du groupe de mot-clés"
                            : "Création d'un groupe de mot-clés"}
                    </h4>
                    <p className="mb-0 fs-6">
                        {!!keywordGroup
                            ? `Groupe de mot-clés numéro ${keywordGroup.id}`
                            : "Remplissez les informations du groupe de mot-clés"}
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
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>
                                    Mots clé{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Select
                                    loadOptions={loadKeywordsLazy}
                                    getOptionValue={(option) => option.id}
                                    getOptionLabel={(option) => option.label}
                                    defaultOptions
                                    isMulti
                                    defaultValue={keywordGroup?.keywords}
                                    aria-errormessage={errors.keyword_ids}
                                    onChange={(value) => {
                                        setData(
                                            "keyword_ids",
                                            value.map((v) => v.id)
                                        );
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.keyword_ids}
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

export default KeywordGroupForm;
