import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { I18n, Scope, TranslateOptions } from "i18n-js";
import { useCallback, useRef } from "react";
import translations from "@/Constants/Translations/index";

const useTranslation = () => {
    const { locale } = usePage<PageProps>().props;

    const i18n = useRef(
        new I18n(translations, {
            defaultLocale: "en",
            enableFallback: true,
            locale,
        })
    ).current;

    const t = useCallback(
        (scope: Scope, options?: TranslateOptions) => {
            return i18n.t(scope, { ...options, locale });
        },
        [locale, i18n]
    );

    return { t, locale };
};

export default useTranslation;
