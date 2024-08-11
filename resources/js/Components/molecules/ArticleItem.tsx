import Avatar from "@/Assets/images/avatar.jpeg";
import Article from "@/Interfaces/Article";
import { Link } from "@inertiajs/react";
import classNames from "classnames";
import { FC } from "react";
import { Col, Figure, Image } from "react-bootstrap";

interface ArticleItemProps {
    article: Article;
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
    return (
        <Col as="article" lg={4} md={6} xs={12}>
            <Figure className="mb-4 zoom-img">
                <Link href={route("articles.show", article.slug)}>
                    <Image
                        src={
                            article.illustration
                                ? article.illustration!.link
                                : ""
                        }
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
                        backgroundColor: category.background_color,
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
                        <Link href="#" className="text-reset fs-6">
                            Claude Allouche
                        </Link>
                    </div>
                </div>
                <div className="ms-3">
                    <span className="fs-6">Nov 26, 2023</span>
                </div>
            </div>
        </Col>
    );
};

export default ArticleItem;
