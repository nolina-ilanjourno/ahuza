export type Langue = "fr" | "en" | "he";

const LANGUES: {
    value: Langue;
    label: string;
}[] = [
    {
        value: "fr",
        label: "Français",
    },
    {
        value: "en",
        label: "English",
    },
    {
        value: "he",
        label: "Hebrew",
    },
];

export default LANGUES;
