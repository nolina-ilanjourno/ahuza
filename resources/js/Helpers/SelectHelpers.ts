export const dot = (color: string = "transparent", right: boolean = false) => ({
    alignItems: "center",
    display: "flex",
    ":before": {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: "block",
        marginLeft: right ? 0 : 8,
        marginRight: right ? 8 : 0,
        height: 10,
        width: 10,
    },
});
