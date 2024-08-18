import Footer from "@/Components/Layouts/Footer";
import Navigation from "@/Components/Layouts/Navbar";
import useTranslation from "@/Hooks/useTranslation";
import { Fragment, PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    useTranslation();
    return (
        <Fragment>
            <Navigation />
            {children}
            <Footer />
        </Fragment>
    );
}
