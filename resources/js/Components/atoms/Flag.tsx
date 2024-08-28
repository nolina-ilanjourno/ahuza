import { FC } from "react";
import { Image } from "react-bootstrap";
import FrenchFlag from "@/Assets/svg/french-flag.svg";
import EnglishFlag from "@/Assets/svg/usa-flag.svg";
import HebrewFlag from "@/Assets/svg/israel-flag.svg";

interface FlagProps {
    lang: string;
}

const Flag: FC<FlagProps> = ({ lang }) => {
    return (
        <Image
            src={
                lang === "fr"
                    ? FrenchFlag
                    : lang === "en"
                    ? EnglishFlag
                    : HebrewFlag
            }
            alt="Flag"
            width={40}
            height={16}
        />
    );
};

export default Flag;
