import fs from "fs";
import data from "./results.json" assert { type: "json" };

// Fonction principale
async function postArticles() {
    for (let i = 0; i < 1; i++) {
        let item = data[i];

        // Vérifier si l'article a déjà été fetch
        if (!item.isFetched) {
            try {
                // Faire la requête POST pour publier l'article
                let response = await fetch(
                    "http://localhost:8000/api/articles",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN":
                                "qksPdsZBLnSpTe3qq5JH43je5nM4m1DuvTlouRle",
                        },
                        body: JSON.stringify({
                            title: item.link,
                            link: item.imageUrl,
                            traductions: [
                                {
                                    langue: "fr",
                                    traduction: item.textContent,
                                },
                            ],
                        }),
                    }
                );

                // Si le statut est 201 (Créé), mettre à jour l'élément
                if (response.status === 201) {
                    item.isFetched = true;
                    console.log(`Article publié et mis à jour: ${item.link}`);
                } else {
                    console.error(
                        `Erreur lors de la publication de l'article: ${item.link}`,
                        response.status
                    );
                }
            } catch (error) {
                console.error(
                    `Erreur lors de la publication de l'article: ${item.link}`,
                    error.message
                );
            }
        }
    }

    // Écrire les modifications dans le fichier JSON
    fs.writeFileSync("./results2.json", JSON.stringify(data, null, 2));
}

// Exécuter la fonction principale
postArticles();
