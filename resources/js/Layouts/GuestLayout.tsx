import Footer from "@/Components/Layouts/Footer";
import Navigation from "@/Components/Layouts/Navbar";
import { Fragment, PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <Fragment>
            <Navigation />
            {children}
            <Footer />
        </Fragment>
    );
}
