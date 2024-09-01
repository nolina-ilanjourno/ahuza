// Import des images des drapeaux
import { NavDropdown } from "react-bootstrap";
import Flag from "../atoms/Flag";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Article from "@/Interfaces/Article";

const FlagSelect = () => {
    const { locale, article } = usePage<
        PageProps<{
            article?: Article;
        }>
    >().props;

    return (
        <NavDropdown
            title={<Flag lang={locale} />}
            menuVariant="light"
            className="bg-light rounded"
        >
            <NavDropdown.Item
                href={route(route().current() as string, {
                    ...(article && { article: article.slug }),
                    locale: "fr",
                })}
            >
                <Flag lang="fr" />
                Français
            </NavDropdown.Item>
            <NavDropdown.Item
                href={route(route().current() as string, {
                    ...(article && { article: article.slug }),
                    locale: "en",
                })}
            >
                <Flag lang="en" />
                English
            </NavDropdown.Item>
            <NavDropdown.Item
                href={route(route().current() as string, {
                    ...(article && { article: article.slug }),
                    locale: "he",
                })}
            >
                <Flag lang="he" />
                עברית
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default FlagSelect;
