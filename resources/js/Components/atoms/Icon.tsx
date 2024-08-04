import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { lazy, Suspense, useRef } from "react";

interface IconProps extends Omit<LucideProps, "ref"> {
    name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = useRef(lazy(dynamicIconImports[name])).current;

    return (
        <Suspense
            fallback={
                <div style={{ background: "#ddd", width: 24, height: 24 }} />
            }
        >
            <LucideIcon {...props} />
        </Suspense>
    );
};

export default Icon;
