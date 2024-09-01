import { FC } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from "@/Assets/images/logo.png";

const Footer: FC = () => {
    return (
        <footer>
            <Container className="my-5">
                <Row className="row align-items-center">
                    <Col md={9}>
                        <a href="#" className="text-inverse">
                            <Image src={Logo} alt="logo" width={175} />
                        </a>
                        <div className="small my-3 mb-lg-0">
                            Copyright © 2024{" "}
                            <span className="text-primary">
                                <a href="#">Claude Allouche</a>
                            </span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-md-end d-flex align-items-center justify-content-md-end">
                            <div className="ms-3 d-flex gap-2">
                                <a
                                    href="https://www.facebook.com/DrAllouche2020"
                                    className="btn btn-facebook btn-icon"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/claude-allouche-776ba719b/"
                                    target="_blank"
                                    className="text-reset btn btn-linkedin btn-icon"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-linkedin"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
