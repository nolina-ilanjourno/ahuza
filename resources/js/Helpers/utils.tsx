export const capitalizeFirstLetter = (string?: string): string => {
    if (!string) return "";
    return string[0].toUpperCase() + string.slice(1);
};

export const splitText = (
    text: string | undefined | null,
    limit: number = 30
): string | undefined => {
    if (!text) return;
    return text.length > limit ? text.slice(0, limit) + "…" : text;
};

export const parseTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
        if (urlRegex.test(part)) {
            return (
                <a
                    href={part}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {part}
                </a>
            );
        }
        return part;
    });
};

export const slugify = (text: string): string => {
    return text
        .toString()
        .normalize("NFD") // Normalize the string to NFD form
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};
