import Editor from "@/Components/Editor";
import SelectInput from "@/Components/Form/SelectInput";
import TrashedMessage from "@/Components/molecules/Messages/TrashedMessage";
import Select, { CreatableSelect } from "@/Components/Select";
import LANGUES from "@/Constants/langues";
import { slugify } from "@/Helpers/utils";
import useLoadOptions from "@/Hooks/useLoadOptions";
import Article, { type ArticleForm } from "@/Interfaces/Article";
import File from "@/Interfaces/File";
import { Transition } from "@headlessui/react";
import { Link, router, useForm } from "@inertiajs/react";
import classNames from "classnames";
import { ArrowLeft } from "lucide-react";
import { FC, FormEventHandler, Fragment } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { OptionProps, SingleValueProps, components } from "react-select";

const ArticleForm: FC<{
    article?: Article;
}> = ({ article }) => {
    const { loadCategoriesLazy, loadFilesLazy, loadInternalCategoriesLazy } =
        useLoadOptions();
    const {
        data,
        setData,
        errors,
        processing,
        recentlySuccessful,
        post,
        patch,
    } = useForm<ArticleForm>({
        illustration_id: article?.illustration_id ?? null,
        title: article?.title ?? "",
        slug: article?.slug ?? "",
        description: article?.description ?? "",
        keywords: article?.keywords ?? "",
        published_at: article?.published_at ?? null,
        category_ids: article?.categories.map((c) => c.id) ?? [],
        internal_category_ids:
            article?.internal_categories.map((c) => c.id) ?? [],
        traductions: article?.traductions ?? [
            {
                id: Math.random().toString(),
                traduction: "",
                langue: "fr",
            },
        ],
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setData((prevData) => ({
            ...prevData,
            title,
            slug: slugify(title),
        }));
    };

    const addTraduction = () => {
        setData("traductions", [
            ...data.traductions,
            {
                id: Math.random().toString(),
                traduction: "",
                langue: "fr",
            },
        ]);
    };

    const setDataTraductions = (index: number, name: string, value: string) => {
        setData("traductions", [
            ...data.traductions.slice(0, index),
            {
                ...data.traductions[index],
                [name]: value,
            },
            ...data.traductions.slice(index + 1),
        ]);
    };

    const removeTraduction = (index: number) => {
        setData(
            "traductions",
            data.traductions.filter((_, i) => i !== index)
        );
    };

    const restore = () => {
        if (
            article &&
            confirm("Are you sure you want to restore this contact?")
        ) {
            router.put(route("dashboard.articles.restore", article.id));
        }
    };

    const SingleValue = ({ children, ...props }: SingleValueProps<File>) => (
        <components.SingleValue {...props}>
            <Image
                src={props.data.link}
                alt={props.data.label}
                width={50}
                height={50}
                className="me-2"
            />
            <span>{children}</span>
        </components.SingleValue>
    );

    const Option = (props: OptionProps<File>) => {
        return (
            <components.Option {...props}>
                <Image
                    src={props.data.link}
                    alt={props.data.label}
                    width={50}
                    height={50}
                    className="me-2"
                />
                <span>{props.data.label}</span>
            </components.Option>
        );
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (article) {
            return patch(route("dashboard.articles.update", article.id));
        }

        return post(route("dashboard.articles.store"));
    };

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Header>
                <Link href={route("dashboard.articles.index")}>
                    <ArrowLeft size={16} />
                </Link>
                <div className="d-flex align-items-center mt-3">
                    {article?.illustration && (
                        <Image
                            src={article.illustration.link}
                            alt="Preview"
                            width={100}
                            className="me-3"
                        />
                    )}
                    <div>
                        <h4>
                            {!!article
                                ? "Modification de l'article"
                                : "Création d'un article"}
                        </h4>
                        <p className="mb-0 fs-6">
                            {!!article
                                ? `Article numéro ${article.id}`
                                : "Remplissez les informations de l'article"}
                        </p>
                    </div>
                </div>
                {article?.deleted_at && (
                    <TrashedMessage
                        message="Cet article a été supprimé."
                        onRestore={restore}
                    />
                )}
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={submit}>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    Image d'illustration{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Select
                                    loadOptions={loadFilesLazy}
                                    getOptionValue={(option) => option.id}
                                    getOptionLabel={(option) => option.label}
                                    defaultOptions
                                    isMulti={false}
                                    components={{
                                        Option,
                                        SingleValue,
                                    }}
                                    defaultValue={article?.illustration}
                                    aria-errormessage={errors.illustration_id}
                                    onChange={(value) =>
                                        setData(
                                            "illustration_id",
                                            value?.id ?? null
                                        )
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Date de publication</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="published_at"
                                    value={
                                        data.published_at
                                            ? new Date(data.published_at)
                                                  .toISOString()
                                                  .split("T")[0]
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData("published_at", e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>
                                    Titre <span className="text-danger">*</span>{" "}
                                    :
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
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>
                                    Lien <span className="text-danger">*</span>{" "}
                                    :
                                </Form.Label>
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
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>
                                    Categories{" "}
                                    <span className="text-danger">*</span> :
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
                                <Form.Label>Categories internes</Form.Label>
                                <Select
                                    loadOptions={loadInternalCategoriesLazy}
                                    getOptionValue={(option) => option.id}
                                    getOptionLabel={(option) => option.label}
                                    defaultOptions
                                    isMulti
                                    defaultValue={article?.internal_categories}
                                    aria-errormessage={
                                        errors.internal_category_ids
                                    }
                                    onChange={(value) => {
                                        setData(
                                            "internal_category_ids",
                                            value.map((v) => v.id)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>
                                    Mots clé{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <CreatableSelect
                                    isMulti
                                    options={[]}
                                    value={data.keywords}
                                    aria-errormessage={errors.keywords}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.keywords}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>
                                    Description{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    name="description"
                                    placeholder="ex: Comment bien choisir son matériel de ski ?"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
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
                                                removeTraduction(index)
                                            }
                                        >
                                            Supprimer
                                        </Button>
                                    </Col>
                                    <Col lg={12}>
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
                                                    setDataTraductions(
                                                        index,
                                                        "langue",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group>
                                            <Form.Label>
                                                Contenu{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Row>
                                                <Col>
                                                    <Editor
                                                        onEditorChange={(
                                                            value
                                                        ) =>
                                                            setDataTraductions(
                                                                index,
                                                                "traduction",
                                                                value
                                                            )
                                                        }
                                                        value={traduction}
                                                    />
                                                </Col>
                                            </Row>
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

export default ArticleForm;
