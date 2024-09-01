import ArticleTable from "@/Components/Table/ArticleTable";
import GuestLayout from "@/Layouts/GuestLayout";

export default function ArticlesView() {
    return (
        <GuestLayout variant="light" transparent={false}>
            <div className="pattern-square"></div>
            <section className="py-5 py-lg-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center">
                                <h1 className="mb-3">Mes articles</h1>
                                <p className="mb-0">
                                    Retrouvez ici tous les articles que j'ai
                                    publié.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ArticleTable />
        </GuestLayout>
    );
}
