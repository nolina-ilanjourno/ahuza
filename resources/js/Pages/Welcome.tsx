import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

import Footer from "@/Components/Layouts/Footer";
import Navigation from "@/Components/Layouts/Navbar";
import About from "@/Components/Sections/About";
import Blog from "@/Components/Sections/Blog";
import Contact from "@/Components/Sections/Contact";
import FAQ from "@/Components/Sections/FAQ";
import Main from "@/Components/Sections/Main";
import Services from "@/Components/Sections/Services";
import SocialNetworks from "@/Components/Sections/SocialNetworks";
import Whatsapp from "@/Components/Sections/Whatsapp";
import type FAQD from "@/Interfaces/FAQ";
import { FC } from "react";

const Welcome: FC<
    PageProps<{
        faqs: FAQD[];
    }>
> = ({ faqs }) => {
    return (
        <main>
            <Head title="Welcome" />
            <Navigation />
            <Main />
            <SocialNetworks />
            <About />
            <hr />
            <Services />
            <Whatsapp />
            <Blog />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
};

export default Welcome;
