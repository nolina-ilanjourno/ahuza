import classNames from "classnames";
import { FC } from "react";
import { DNA, DNAProps } from "react-loader-spinner";

const Loader: FC<DNAProps> = ({ visible }) => {
    return (
        <div
            className={classNames("d-flex flex-column align-items-center", {
                "d-none": !visible,
            })}
        >
            <DNA
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            <p className="mt-2">Chargement en cours ...</p>
        </div>
    );
};

export default Loader;
