import Footer from "@/Components/Layouts/Footer";
import Navigation from "@/Components/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import Blog9 from "@/Assets/images/blog/blog-img-9.jpg";
import Avatar from "@/Assets/images/avatar/avatar-1.jpg";

export default function ArticlesView() {
    return (
        <main>
            <Head title="Welcome" />
            <Navigation />
            <div className="pattern-square"></div>
            <section className="py-5 py-lg-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center">
                                <h1 className="mb-3">Blog Single Column</h1>
                                <p className="mb-0">
                                    Blog Single Column We write stuff from time
                                    to time that might be interesting 🤷‍‍
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-xl-9 my-4">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="row g-2 g-sm-3 align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <form>
                                        <label
                                            htmlFor="searchInput"
                                            className="form-label visually-hidden"
                                        >
                                            Search Blog
                                        </label>
                                        <input
                                            type="search"
                                            className="form-control"
                                            id="searchInput"
                                            placeholder="Search Blog"
                                        />
                                    </form>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label
                                        htmlFor="categoryList"
                                        className="form-label visually-hidden"
                                    >
                                        Search Category
                                    </label>
                                    <select
                                        className="form-select"
                                        id="categoryList"
                                        defaultValue={""}
                                    >
                                        <option disabled value="">
                                            Select Category
                                        </option>
                                        <option value="Digital">Digital</option>
                                        <option value="Design">Design</option>
                                        <option value="Business">
                                            Business
                                        </option>
                                        <option value="Startup">Startup</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <article className="row d-flex align-items-center mb-7 mb-md-5">
                                <div className="col-lg-5 col-xl-5 col-md-12 col-12">
                                    <figure className="mb-4 mb-lg-0 zoom-img">
                                        <a href="./blog-single.html">
                                            <img
                                                src={Blog9}
                                                alt="blog"
                                                className="img-fluid rounded-3"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div className="col-lg-7 col-xl-7 col-md-12 col-12">
                                    <div className="ms-lg-4">
                                        <a
                                            href="#!"
                                            className="mb-3 badge bg-primary-subtle text-primary-emphasis rounded-pill text-uppercase"
                                        >
                                            Digital
                                        </a>
                                        <div className="mb-4">
                                            <h3 className="lh-base h4">
                                                <a
                                                    href="./blog-single.html"
                                                    className="text-reset"
                                                >
                                                    Introducing Block Bootstrap
                                                    5 based design in 2024
                                                </a>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nam
                                                ut velit dui. Quisque in lorem
                                                et nibh malesuada rutrum. Aenean
                                                faucibus auctor mauris, in
                                                porttitor ante fermentum eu.
                                            </p>
                                        </div>
                                        <div className="d-md-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center mb-3 mb-md-0">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={Avatar}
                                                        alt="Avatar"
                                                        className="avatar avatar-xs rounded-circle"
                                                    />
                                                    <div className="ms-2">
                                                        <a
                                                            href="#"
                                                            className="text-reset fs-6"
                                                        >
                                                            Sandip Chauhan
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="ms-3">
                                                    <span className="fs-6">
                                                        Dec 21, 2023
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="me-3">
                                                    <a
                                                        href="#!"
                                                        className="text-reset"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            fill="currentColor"
                                                            className="bi bi-chat-left"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                        </svg>
                                                        <span className="ms-2 fs-6">
                                                            24
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="me-3">
                                                    <a
                                                        href="#!"
                                                        className="text-reset"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            fill="currentColor"
                                                            className="bi bi-hand-thumbs-up"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                                        </svg>
                                                        <span className="ms-2 fs-6">
                                                            1.2k
                                                        </span>
                                                    </a>
                                                </div>

                                                <a
                                                    href="#!"
                                                    className="text-reset"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        fill="currentColor"
                                                        className="bi bi-share"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <span className="ms-2 fs-6">
                                                        2.5k
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-12">
                            <div className="mt-xl-7 mt-3">
                                <a
                                    className="btn btn-outline-primary"
                                    href="#!"
                                >
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="ms-2">Load More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
