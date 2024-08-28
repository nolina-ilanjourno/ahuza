import Logo from "@/Assets/images/logo.jpeg";
import { Link } from "@inertiajs/react";
import classNames from "classnames";
import { FC, Fragment, useEffect, useState } from "react";
import {
    Button,
    Container,
    Image,
    Nav,
    Navbar as NavbarBootstrap,
    Offcanvas,
} from "react-bootstrap";
import FlagSelect from "../molecules/FlagSelect";

interface NavbarProps {
    isClone?: boolean;
    variant?: "light" | "dark";
    transparent?: boolean;
    isGuest?: boolean;
}

const Navbar: FC<NavbarProps> = ({
    isClone,
    variant = "dark",
    transparent,
    isGuest,
}) => {
    const [navbarSticky, setNavbarSticky] = useState<boolean>(false);

    const handleScroll = () => {
        if (!isClone) return;

        if (window.scrollY > 400) {
            setNavbarSticky(true);
        } else {
            setNavbarSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <NavbarBootstrap
                expand="lg"
                variant={variant}
                className={classNames("w-100 fixed", {
                    "transparent navbar-transparent": transparent,
                    "navbar-stick": navbarSticky,
                    "navbar-unstick": !navbarSticky,
                    "navbar-clone": isClone,
                })}
            >
                <Container>
                    <NavbarBootstrap.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <Image src={Logo} alt="Logo" width={175} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="d-flex flex-column mt-3 mt-lg-0 align-items-center">
                                <Button
                                    href="#contact"
                                    variant="light"
                                    size="sm"
                                    className="mx-2"
                                >
                                    Prendre rendez-vous
                                </Button>
                            </div>
                            <Nav className="align-items-lg-center mx-auto">
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href={route("welcome") + "/#"}
                                    >
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href={route("welcome") + "/#about"}
                                    >
                                        À propos
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href={route("articles.index")}
                                    >
                                        Les articles
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href={route("welcome") + "/#faq"}
                                    >
                                        F.A.Q
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href={route("welcome") + "/#contact"}
                                    >
                                        Contact
                                    </Nav.Link>
                                </Nav.Item>
                                {isGuest && (
                                    <Nav.Item>
                                        <FlagSelect />
                                    </Nav.Item>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </NavbarBootstrap.Offcanvas>

                    <Link
                        href="tel:058-726-0264"
                        className={classNames("mb-0", {
                            "text-white": variant === "dark" && transparent,
                            "text-dark": variant === "light" || !transparent,
                        })}
                    >
                        058-726-0264
                    </Link>
                    <NavbarBootstrap.Toggle aria-controls="offcanvasNavbar" />
                </Container>
            </NavbarBootstrap>
        </header>
    );
};

export const Navigation: FC<{
    transparent?: NavbarProps["transparent"];
    isGuest?: boolean;
}> = (props) => {
    return (
        <Fragment>
            <Navbar variant="dark" {...props} />
            <Navbar isClone variant="light" {...props} />
        </Fragment>
    );
};

export default Navigation;
