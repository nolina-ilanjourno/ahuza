import whatsapp from "@/Assets/images/whatsapp.png";
import useTranslation from "@/Hooks/useTranslation";
import { Link } from "@inertiajs/react";
import { Image } from "react-bootstrap";

export default function Whatsapp() {
    const { t } = useTranslation();

    return (
        <section className="my-9">
            <div className="container">
                <div className="row line-pattern bg-whatsapp-gradient rounded-3 p-7 g-0">
                    <div className="col-lg-8 offset-lg-2 z-1">
                        <div className="text-center ">
                            <Image
                                src={whatsapp}
                                width={130}
                                className="mb-5"
                            />
                            <h2 className="h1 text-white-stable text-uppercase">
                                {t("whatsapp.title")}
                            </h2>
                            <p className="text-white-50 px-lg-7 mb-5">
                                {t("whatsapp.description")}
                            </p>
                            <Link
                                href="whatsapp://send?text=Hello World!&phone=+9198********1"
                                className="btn btn-dark"
                            >
                                058-726-0264
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
