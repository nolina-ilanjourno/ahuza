import { useBreakpoints } from "@/Hooks/useBreakpoints";
import { router } from "@inertiajs/react";
import classNames from "classnames";
import { forwardRef, ForwardRefRenderFunction } from "react";
import {
    Button,
    ButtonProps,
    OverlayTrigger,
    OverlayTriggerProps,
    Tooltip,
} from "react-bootstrap";
import Icon, { CustomIcon } from "./Icon";

interface IProps extends ButtonProps {
    icon: CustomIcon;
    iconAlign?: "left" | "right" | "middle";
    iconClassName?: string;
    transform?: string;
    children?: React.ReactNode;
    overlayTitle?: string;
    overlayPlacement?: OverlayTriggerProps["placement"];
}

const IconButton: ForwardRefRenderFunction<HTMLButtonElement, IProps> = (
    {
        children,
        iconAlign = "left",
        iconClassName,
        icon,
        transform,
        overlayTitle,
        href,
        onClick,
        overlayPlacement = "top",
        color,
        ...rest
    },
    ref
) => {
    const { breakpoints } = useBreakpoints();

    const onClickTrigger = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (href) {
            e.preventDefault();
            if (/^(tel|mailto):/i.test(href)) {
                document.location.href = href;
            } else {
                router.get(href);
            }
        } else if (onClick) {
            onClick(e);
        }
    };

    return (
        <OverlayTrigger
            placement={overlayPlacement}
            show={breakpoints.down("xl") && !!overlayTitle ? undefined : false}
            overlay={<Tooltip>{overlayTitle}</Tooltip>}
        >
            <Button ref={ref} onClick={onClickTrigger} {...rest}>
                {iconAlign === "right" && children}
                <Icon
                    name={icon}
                    className={classNames(iconClassName, {
                        "me-1": children && iconAlign === "left",
                        "ms-1": children && iconAlign === "right",
                    })}
                    color={color}
                    size={16}
                    transform={transform}
                />
                {iconAlign === "left" || iconAlign === "middle"
                    ? children
                    : false}
            </Button>
        </OverlayTrigger>
    );
};

export default forwardRef(IconButton);
