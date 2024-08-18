import { Link } from "@inertiajs/react";
import classNames from "classnames";
import { FC, Fragment, useEffect, useState } from "react";
import {
    Button,
    Container,
    Dropdown,
    DropdownButton,
    Image,
    Nav,
    Navbar as NavbarBootstrap,
    Offcanvas,
} from "react-bootstrap";
import FrenchFlag from "@/Assets/svg/french-flag.svg";
import EnglishFlag from "@/Assets/svg/usa-flag.svg";
import HebrewFlag from "@/Assets/svg/israel-flag.svg";
interface NavbarProps {
    isClone?: boolean;
    variant?: "light" | "dark";
    transparent?: boolean;
}

const Navbar: FC<NavbarProps> = ({
    isClone,
    variant = "dark",
    transparent,
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
                                {/* <Image src={Logo} alt="Logo" width={175} /> */}
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
                            </Nav>
                        </Offcanvas.Body>
                    </NavbarBootstrap.Offcanvas>
                    <DropdownButton
                        id="dropdown-language"
                        title={
                            <Image
                                src={FrenchFlag}
                                alt="Français"
                                width={40}
                                height={16}
                            />
                        }
                        className="mx-3"
                        size="sm"
                        variant="light"
                    >
                        <Dropdown.Item eventKey="fr">
                            <Image
                                src={FrenchFlag}
                                alt="Français"
                                width={40}
                                height={16}
                            />
                            Français
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="en">
                            <Image
                                src={EnglishFlag}
                                alt="English"
                                width={40}
                                height={16}
                            />
                            English
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="he">
                            <Image
                                src={HebrewFlag}
                                alt="Hebrew"
                                width={40}
                                height={16}
                            />
                            עברית
                        </Dropdown.Item>
                    </DropdownButton>
                    <Link
                        href="tel:058-726-0264"
                        className={classNames("mb-0", {
                            "text-white": variant === "dark" && transparent,
                            "text-dark": variant === "light" || !transparent,
                        })}
                    >
                        058-726-0264
                    </Link>
                    {/* <Link href="/">
            <Image src={Logo} alt="Logo" width={175} />
          </Link> */}
                    <NavbarBootstrap.Toggle aria-controls="offcanvasNavbar" />
                </Container>
            </NavbarBootstrap>
        </header>
    );
};

export const Navigation: FC<{ transparent?: NavbarProps["transparent"] }> = ({
    transparent = true,
}) => {
    return (
        <Fragment>
            <Navbar variant="dark" transparent={transparent} />
            <Navbar isClone variant="light" transparent={transparent} />
        </Fragment>
    );
};

export default Navigation;
