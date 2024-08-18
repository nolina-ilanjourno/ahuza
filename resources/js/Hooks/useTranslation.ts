import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

const useTranslation = () => {
    const { locale } = usePage<PageProps>().props;
};

export default useTranslation;
