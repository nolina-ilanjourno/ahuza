import {
    ArrowLeft,
    Copy,
    Eye,
    Facebook,
    Filter,
    Linkedin,
    LucideProps,
    Play,
    Plus,
    RefreshCw,
    Search,
    Trash2,
} from "lucide-react";
import { Suspense } from "react";

export type CustomIcon =
    | "eye"
    | "plus"
    | "refresh-cw"
    | "trash-2"
    | "copy"
    | "play"
    | "facebook"
    | "linkedin"
    | "search"
    | "filter"
    | "arrow-left";

interface IconProps extends Omit<LucideProps, "ref"> {
    name: CustomIcon;
}

const Icon = ({ name, ...props }: IconProps) => {
    return (
        <Suspense
            fallback={
                <div style={{ background: "#ddd", width: 24, height: 24 }} />
            }
        >
            {name === "copy" ? (
                <Copy {...props} />
            ) : name === "refresh-cw" ? (
                <RefreshCw {...props} />
            ) : name === "eye" ? (
                <Eye {...props} />
            ) : name === "plus" ? (
                <Plus {...props} />
            ) : name === "trash-2" ? (
                <Trash2 {...props} />
            ) : name === "play" ? (
                <Play {...props} />
            ) : name === "facebook" ? (
                <Facebook {...props} />
            ) : name === "linkedin" ? (
                <Linkedin {...props} />
            ) : name === "search" ? (
                <Search {...props} />
            ) : name === "arrow-left" ? (
                <ArrowLeft {...props} />
            ) : (
                <Filter {...props} />
            )}
        </Suspense>
    );
};

export default Icon;
