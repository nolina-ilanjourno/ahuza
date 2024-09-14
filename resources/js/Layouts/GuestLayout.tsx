import Footer from "@/Components/Layouts/Footer";
import Navigation, { NavbarProps } from "@/Components/Layouts/Navbar";
import useTranslation from "@/Hooks/useTranslation";
import { Head } from "@inertiajs/react";
import { Fragment, PropsWithChildren } from "react";

export default function GuestLayout({
    children,
    transparent,
    variant = "dark",
    title,
    description,
    keywords,
}: PropsWithChildren<{
    transparent?: boolean;
    variant?: NavbarProps["variant"];
    description?: string;
    keywords?: string[];
    title?: string;
}>) {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Head>
                <title>{title ?? t("title")}</title>
                <meta
                    name="description"
                    content={description ?? t("mainDescription")}
                />
                <meta
                    name="keywords"
                    content={keywords ? keywords.join(", ") : t("keywords")}
                />
            </Head>
            <Navigation transparent={transparent} variant={variant} />
            {children}
            <Footer />
        </Fragment>
    );
}
