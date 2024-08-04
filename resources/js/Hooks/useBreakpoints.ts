import { BreakPointsType } from "@/Constants/breakpoints";
import { useState, useEffect } from "react";

const gridBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1540,
};

export const useBreakpoints = () => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const [breakpoints, setBreakpoints] = useState({
        up: (bp: BreakPointsType) => {
            return width > gridBreakpoints[bp];
        },
        down: (bp: BreakPointsType) => {
            return width < gridBreakpoints[bp];
        },
    });
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        setBreakpoints({
            up: (bp) => width >= gridBreakpoints[bp],
            down: (bp) => width < gridBreakpoints[bp],
        });
    }, [width]);

    return { width, height, breakpoints };
};
