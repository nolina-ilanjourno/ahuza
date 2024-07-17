export default function Whatsapp() {
    return (
        <section className="my-9">
            <div className="container">
                <div className="row line-pattern bg-whatsapp-gradient rounded-3 p-7 g-0">
                    <div className="col-lg-8 offset-lg-2 z-1">
                        <div className="text-center ">
                            <img
                                src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png"
                                width={130}
                                className="mb-5"
                            />
                            <h2 className="h1 text-white-stable text-uppercase">
                                Whatsapp
                            </h2>
                            <p className="text-white-50 px-lg-7 mb-5">
                                Vous avez des questions ou vous souhaitez
                                prendre rendez-vous? Contactez-moi via WhatsApp.
                            </p>
                            <a href="#!" className="btn btn-dark">
                                058-726-0264
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
