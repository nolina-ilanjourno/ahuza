import type File from "@/Interfaces/File";
import { type FileForm } from "@/Interfaces/File";
import { Transition } from "@headlessui/react";
import { Link, useForm } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { FC, FormEventHandler, Fragment } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Image,
    InputGroup,
    Row,
} from "react-bootstrap";
import { useCopyToClipboard } from "react-use";

const ImageForm: FC<{
    image?: File;
}> = ({ image }) => {
    const [copiedText, copy] = useCopyToClipboard();

    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<Partial<FileForm>>({
        label: image?.label ?? "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (image) {
            return patch(route("dashboard.images.update", image.id));
        }

        return post(route("dashboard.images.store"));
    };

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Header>
                <Link href={route("dashboard.images.index")}>
                    <ArrowLeft size={16} />
                </Link>
                <div className="d-flex align-items-center mt-3">
                    {image && (
                        <Image
                            src={image.link}
                            alt="Preview"
                            width={100}
                            className="me-3"
                        />
                    )}
                    <div>
                        <h4>
                            {!!image
                                ? "Modification de l'image"
                                : "Création d'une catégorie"}
                        </h4>
                        <p className="mb-0 fs-6">
                            {!!image
                                ? `Image numéro ${image.id}`
                                : "Remplissez les informations de l'image"}
                        </p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={submit}>
                    <Row className="g-3">
                        <Col md={6}>
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
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="file">
                                    Upload Image{" "}
                                    <span className="text-danger">*</span> :
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    id="file"
                                    name="file"
                                    className="w-100"
                                    isInvalid={!!errors.file}
                                    onChange={(e) =>
                                        // @ts-ignore
                                        setData("file", e.target.files?.[0])
                                    }
                                    required
                                    autoComplete="off"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.file}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {image && (
                            <Fragment>
                                <Col lg={6}>
                                    <Form.Group>
                                        <Form.Label>
                                            Taille de l'image :
                                        </Form.Label>
                                        <Form.Control
                                            readOnly
                                            value={image.size}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group>
                                        <Form.Label>
                                            Type de l'image :
                                        </Form.Label>
                                        <Form.Control
                                            readOnly
                                            value={image.mime_type}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group>
                                        <Form.Label>
                                            Lien de l'image :
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                readOnly
                                                value={image.link}
                                            />
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                onClick={() => copy(image.link)}
                                            >
                                                {copiedText.value
                                                    ? "Copied!"
                                                    : "Copy"}
                                            </Button>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Fragment>
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

export default ImageForm;
