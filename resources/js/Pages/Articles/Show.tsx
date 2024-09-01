import Article from "@/Interfaces/Article";
import GuestLayout from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ArticleShow: FC<
    PageProps<{
        article: Article;
    }>
> = ({ article }) => {
    return (
        <GuestLayout variant="light" transparent={false}>
            <div className="pattern-square"></div>
            <div className="py-xl-9 py-4">
                <Container>
                    <Row>
                        <Col lg={8} className="offset-lg-2">
                            <article
                                dangerouslySetInnerHTML={{
                                    __html: article.traductions[0].traduction,
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </GuestLayout>
    );
};

export default ArticleShow;
