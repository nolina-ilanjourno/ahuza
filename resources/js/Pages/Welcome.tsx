import About from "@/Components/Sections/About";
import Blog from "@/Components/Sections/Blog";
import Contact from "@/Components/Sections/Contact";
import FAQ from "@/Components/Sections/FAQ";
import Main from "@/Components/Sections/Main";
import Services from "@/Components/Sections/Services";
import SocialNetworks from "@/Components/Sections/SocialNetworks";
import Whatsapp from "@/Components/Sections/Whatsapp";
import useTranslation from "@/Hooks/useTranslation";
import GuestLayout from "@/Layouts/GuestLayout";
import { FC } from "react";

const Welcome: FC = () => {
    const { t } = useTranslation();
    return (
        <GuestLayout>
            <Main />
            <SocialNetworks />
            <About />
            <hr />
            <Services />
            <Whatsapp />
            <Blog />
            <FAQ />
            <Contact />
        </GuestLayout>
    );
};

export default Welcome;
