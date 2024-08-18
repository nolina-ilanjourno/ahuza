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
import { FC } from "react";
import useTranslation from "@/Hooks/useTranslation";

const Welcome: FC = () => {
    useTranslation();
    return (
        <main>
            <Head>
                <title>Claude Allouche | Gynécologue</title>
                <meta
                    name="description"
                    content="Je suis le Dr Claude Allouche, gynécologue-obstétricien à Raanana et Netanya, avec de nombreuses années d'expérience et un parcours remarquable dans les différents domaines de ma spécialité."
                />
                <meta name="robots" content="index, follow" />
            </Head>
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
