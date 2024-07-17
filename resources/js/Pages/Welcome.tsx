import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

import About from "@/Components/Sections/About";
import Blog from "@/Components/Sections/Blog";
import Contact from "@/Components/Sections/Contact";
import FAQ from "@/Components/Sections/FAQ";
import Main from "@/Components/Sections/Main";
import Services from "@/Components/Sections/Services";
import SocialNetworks from "@/Components/Sections/SocialNetworks";
import Whatsapp from "@/Components/Sections/Whatsapp";
import Navigation from "@/Components/Layouts/Navbar";
import Footer from "@/Components/Layouts/Footer";
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
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
}
