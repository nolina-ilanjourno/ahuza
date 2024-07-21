import { Colors, ColorsArray } from "@/Interfaces/Theme";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
    children: React.ReactNode;
    bg?: Colors | string;
    textColor?: string;
    className?: string;
    textClassName?: string;
    pill?: boolean;
}

const SoftBadge: FC<IProps> = ({
    children,
    bg = "danger",
    className,
    textColor,
    textClassName,
    pill = false,
}) => {
    return (
        <div
            className={classNames(`badge`, className, {
                "rounded-pill": pill,
                [`badge-soft-${bg}`]: ColorsArray.includes(bg),
            })}
            style={{
                backgroundColor: !ColorsArray.includes(bg) ? bg : undefined,
            }}
        >
            <span
                className={textClassName}
                style={{
                    color: !ColorsArray.includes(bg) ? textColor : undefined,
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default SoftBadge;
