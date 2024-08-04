import Editor from "@/Components/Editor";
import TrashedMessage from "@/Components/molecules/Messages/TrashedMessage";
import Select from "@/Components/Select";
import { slugify } from "@/Helpers/utils";
import useLoadOptions from "@/Hooks/useLoadOptions";
import Article, { type ArticleForm } from "@/Interfaces/Article";
import { Transition } from "@headlessui/react";
import { Link, router, useForm } from "@inertiajs/react";
import classNames from "classnames";
import { ArrowLeft } from "lucide-react";
import { FC, FormEventHandler } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const ArticleForm: FC<{
    article?: Article;
}> = ({ article }) => {
    const { loadCategoriesLazy } = useLoadOptions();

    const {
        data,
        setData,
        errors,
        processing,
        recentlySuccessful,
        post,
        patch,
    } = useForm<ArticleForm>({
        title: article?.title ?? "",
        slug: article?.slug ?? "",
        category_ids: article?.categories.map((c) => c.id) ?? [],
        content: article?.content ?? "",
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setData((prevData) => ({
            ...prevData,
            title,
            slug: slugify(title),
        }));
    };

    const restore = () => {
        if (
            article &&
            confirm("Are you sure you want to restore this contact?")
        ) {
            router.put(route("articles.restore", article.id));
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (article) {
            return patch(route("articles.update", article.id));
        }

        return post(route("articles.store"));
    };

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Header>
                <Link href={route("articles.index")}>
                    <ArrowLeft size={16} />
                </Link>
                <div className="mt-3">
                    <h4>
                        {!!article
                            ? "Modification de l'article"
                            : "Création d'un article"}
                    </h4>
                    <p
                        className={classNames("mb-0 fs-6", {
                            "mb-3": article?.deleted_at,
                        })}
                    >
                        {!!article
                            ? `Article numéro ${article.id}`
                            : "Remplissez les informations de l'article"}
                    </p>
                    {article?.deleted_at && (
                        <TrashedMessage
                            message="Cet article a été supprimé."
                            onRestore={restore}
                        />
                    )}
                </div>
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={submit}>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    Titre <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="ex: Comment bien choisir son matériel de ski ?"
                                    value={data.title}
                                    onChange={handleTitleChange}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Slug</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="slug"
                                    readOnly
                                    isInvalid={!!errors.slug}
                                    value={data.slug}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.slug}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>
                                    Categories{" "}
                                    <span className="text-danger">*</span>
                                </Form.Label>
                                <Select
                                    loadOptions={loadCategoriesLazy}
                                    getOptionValue={(option) => option.id}
                                    getOptionLabel={(option) => option.label}
                                    defaultOptions
                                    isMulti
                                    defaultValue={article?.categories}
                                    aria-errormessage={errors.category_ids}
                                    onChange={(value) => {
                                        setData(
                                            "category_ids",
                                            value.map((v) => v.id)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>
                                    Contenu{" "}
                                    <span className="text-danger">*</span>
                                </Form.Label>
                                <Row>
                                    <Col>
                                        <Editor
                                            onEditorChange={(content: string) =>
                                                setData("content", content)
                                            }
                                            value={data.content}
                                        />
                                    </Col>
                                </Row>
                                <Form.Control.Feedback type="invalid">
                                    {errors.content}
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

export default ArticleForm;
