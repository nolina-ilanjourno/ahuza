import Icon from "../atoms/Icon";

export default function SocialNetworks() {
    return (
        <div className="my-xl-9 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-12">
                        <div className="text-center mb-4 mb-lg-7">
                            <small className="text-uppercase fw-semibold ls-md">
                                Mes réseaux sociaux
                            </small>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center gap-5 pb-6">
                                <div>
                                    <figure className="text-center">
                                        <Icon name="facebook" />
                                    </figure>
                                </div>
                                <div>
                                    <figure className="text-center">
                                        <Icon name="linkedin" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
