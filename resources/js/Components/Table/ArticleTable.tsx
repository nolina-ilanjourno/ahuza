import Avatar from "@/Assets/images/avatar.jpeg";
import Article from "@/Interfaces/Article";
import PaginatedData from "@/Interfaces/PaginatedData";
import { useLazyGetArticlesQuery } from "@/Services/articles";
import { PageProps } from "@/types";
import { Link, router, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { pickBy } from "lodash";
import { FC, useEffect, useState } from "react";
import {
    Button,
    Col,
    Container,
    Figure,
    Form,
    Image,
    Row,
} from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { usePrevious } from "react-use";
import TextInput from "../Form/TextInput";

const ArticleTable: FC = () => {
    const { articles, filters } = usePage<
        PageProps<{
            articles: PaginatedData<Article>;
            filters: { search?: string };
        }>
    >().props;
    const [getArticlesLazy, { data }] = useLazyGetArticlesQuery();
    const [hasMore, setHasMore] = useState<boolean>(
        articles.meta.current_page !== articles.meta.last_page
    );
    const [articleList, setArticleList] = useState<Article[]>(articles.data);

    const [values, setValues] = useState({
        search: filters.search || "",
        page: articles.meta.current_page,
    });

    const { ref, inView } = useInView();

    const prevValues = usePrevious(values);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [name]: value,
            page: 1,
        }));

        if (name === "search") {
            router.get(
                route(route().current() as string),
                { search: value },
                {
                    replace: true,
                    preserveState: true,
                    onSuccess: (page) => {
                        const newArticles = (page as any).props.articles.data;
                        const condition: boolean = Boolean(
                            value === "" && data
                        );
                        setArticleList([
                            ...newArticles,
                            ...(condition ? data!.data : []),
                        ]);
                        setHasMore(
                            condition
                                ? data!.meta.current_page !==
                                      data!.meta.last_page
                                : (page as any).props.articles.meta
                                      .current_page !==
                                      (page as any).props.articles.meta
                                          .last_page
                        );
                    },
                }
            );
        }
    };

    useEffect(() => {
        if (inView && hasMore && prevValues) {
            getArticlesLazy(
                pickBy({
                    ...values,
                    page: values.page + 1,
                })
            )
                .unwrap()
                .then((response) => {
                    setArticleList((articleList) => [
                        ...articleList,
                        ...response.data,
                    ]);
                    setHasMore(
                        response.meta.current_page !== response.meta.last_page
                    );
                });
        }
    }, [inView]);

    return (
        <section className="mb-xl-9 my-4">
            <Container>
                <Row className="mb-5">
                    <Col lg={5} md={7}>
                        <Row className="g-2 g-sm-3 align-items-center">
                            <Col lg={6} md={6}>
                                <Form>
                                    <Form.Label
                                        htmlFor="searchInput"
                                        className="visually-hidden"
                                    >
                                        Search Blog
                                    </Form.Label>
                                    <TextInput
                                        size="sm"
                                        name="search"
                                        autoComplete="off"
                                        className="shadow-none"
                                        placeholder="Rechercher ..."
                                        value={values.search}
                                        onChange={handleChange}
                                    />
                                </Form>
                            </Col>
                            <Col lg={6} md={6}></Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="gy-lg-7 gy-5">
                    {articleList.map((article) => (
                        <Col key={article.id} lg={4} md={6}>
                            <Figure className="mb-4 zoom-img">
                                <Link
                                    href={route("articles.show", article.slug)}
                                >
                                    <Image
                                        src={article.illustration!.link}
                                        alt={article.title}
                                        fluid
                                        rounded
                                    />
                                </Link>
                            </Figure>
                            {article.categories.map((category, index) => (
                                <span
                                    key={category.id}
                                    style={{
                                        backgroundColor:
                                            category.background_color,
                                        color: category.text_color,
                                    }}
                                    className={classNames("badge badge-pill", {
                                        "ms-1": index > 0,
                                    })}
                                >
                                    {category.label}
                                </span>
                            ))}
                            <h3 className="my-3 lh-base h4">
                                <Link
                                    href={route("articles.show", article.slug)}
                                    className="text-reset"
                                >
                                    {article.title}
                                </Link>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                                <div className="d-flex align-items-center">
                                    <Image
                                        src={Avatar}
                                        alt="Avatar"
                                        className="avatar avatar-xs rounded-circle"
                                    />
                                    <div className="ms-2">
                                        <Link
                                            href="#"
                                            className="text-reset fs-6"
                                        >
                                            Claude Allouche
                                        </Link>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="fs-6">
                                        {article.published_at}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div ref={ref} className="mt-xl-7 mt-3">
                    {hasMore && (
                        <Button variant="outline-primary">
                            <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            <span className="ms-2">Load More</span>
                        </Button>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default ArticleTable;
