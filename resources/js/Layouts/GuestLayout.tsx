import Footer from "@/Components/Layouts/Footer";
import Navigation, { NavbarProps } from "@/Components/Layouts/Navbar";
import useTranslation from "@/Hooks/useTranslation";
import { Fragment, PropsWithChildren } from "react";

export default function GuestLayout({
    children,
    transparent,
    variant = "dark",
}: PropsWithChildren<{
    transparent?: boolean;
    variant?: NavbarProps["variant"];
}>) {
    useTranslation();
    return (
        <Fragment>
            <Navigation transparent={transparent} variant={variant} />
            {children}
            <Footer />
        </Fragment>
    );
}
