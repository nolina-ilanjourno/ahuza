import Avatar from "@/Assets/images/avatar.jpeg";
import Blog1 from "@/Assets/images/blog1.jpg";
import Blog2 from "@/Assets/images/blog2.jpg";
import Blog3 from "@/Assets/images/blog3.jpg";

export default function Blog() {
    return (
        <section id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="text-center mb-xl-7 mb-5">
                            <h2 className="h1 mb-3">Mes articles</h2>
                            <p className="mb-0">
                                Retrouvez ici mes derniers articles. <br />
                                <a href="#" className="text-primary">
                                    Voir tous les articles
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="table-responsive-lg">
                    <div className="row g-5 flex-nowrap pb-4 pb-lg-0 me-5 me-lg-0">
                        <article className="col-lg-4 col-md-6 col-12">
                            <figure className="mb-4 zoom-img">
                                <a href="@@webRoot/blog-single.html">
                                    <img
                                        src={Blog1}
                                        alt="blog"
                                        className="img-fluid rounded-3"
                                        style={{
                                            height: 400,
                                            width: 400,
                                            objectFit: "cover",
                                        }}
                                    />
                                </a>
                            </figure>

                            <a
                                href="#!"
                                className="badge bg-primary-subtle text-primary-emphasis rounded-pill text-uppercase"
                            >
                                Infertilité
                            </a>
                            <h3 className="my-3 lh-base h4">
                                <a
                                    href="@@webRoot/blog-single.html"
                                    className="text-reset"
                                >
                                    Définition
                                </a>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={Avatar}
                                        alt="Avatar"
                                        className="avatar avatar-xs rounded-circle"
                                    />
                                    <div className="ms-2">
                                        <a href="#" className="text-reset fs-6">
                                            Claude Allouche
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="fs-6">Nov 26, 2023</span>
                                </div>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-12">
                            <figure className="mb-4 zoom-img">
                                <a href="@@webRoot/blog-single.html">
                                    <img
                                        src={Blog2}
                                        alt="blog"
                                        className="img-fluid rounded-3"
                                        style={{
                                            height: 400,
                                            width: 400,
                                            objectFit: "cover",
                                        }}
                                    />
                                </a>
                            </figure>

                            <a
                                href="#!"
                                className="badge bg-warning-subtle text-warning-emphasis rounded-pill text-uppercase"
                            >
                                Ménopause
                            </a>
                            <h3 className="my-3 lh-base h4">
                                <a
                                    href="@@webRoot/blog-single.html"
                                    className="text-reset"
                                >
                                    Quels sont les traitements non hormonaux de
                                    la ménopause ?
                                </a>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={Avatar}
                                        alt="Avatar"
                                        className="avatar avatar-xs rounded-circle"
                                    />
                                    <div className="ms-2">
                                        <a href="#" className="text-reset fs-6">
                                            Claude Allouche
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="fs-6">Nov 21, 2023</span>
                                </div>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-12">
                            <figure className="mb-4 zoom-img">
                                <a href="@@webRoot/blog-single.html">
                                    <img
                                        src={Blog3}
                                        alt="blog"
                                        className="img-fluid rounded-3"
                                        style={{
                                            height: 400,
                                            width: 400,
                                            objectFit: "cover",
                                        }}
                                    />
                                </a>
                            </figure>

                            <a
                                href="#!"
                                className="badge bg-success-subtle text-success-emphasis rounded-pill text-uppercase"
                            >
                                Stérilet
                            </a>
                            <h4 className="my-3 lh-base">
                                <a
                                    href="@@webRoot/blog-single.html"
                                    className="text-reset"
                                >
                                    Qu'est-ce que c'est ? Comment ça marche ?
                                </a>
                            </h4>
                            <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={Avatar}
                                        alt="Avatar"
                                        className="avatar avatar-xs rounded-circle"
                                    />
                                    <div className="ms-2">
                                        <a href="#" className="text-reset fs-6">
                                            Claude Allouche
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="fs-6">Nov 23, 2023</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mt-lg-8 mt-5">
                            <a
                                href="./blog.html"
                                className="icon-link icon-link-hover text-dark"
                            >
                                Read more news
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
