<?php 

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Tags\Url;
use App\Models\Article;
use Spatie\Sitemap\Sitemap;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Génère le sitemap pour le site';

    public function handle()
    {
        // Générer le sitemap de base
        $sitemap = Sitemap::create("/");

        // URLs statiques de base (pages principales)
        collect([
            '/',
            '/fr',
            '/en',
            '/he',
            '/fr/articles',
            '/en/articles',
            '/he/articles',
        ])->each(function($url) use ($sitemap) {
            $sitemap->add(Url::create($url));
        });

        // Récupérer les articles publiés avec leurs traductions et images
        $articles = Article::with(['traductions'])
            ->where('published_at', '<=', now()) // Articles publiés
            ->get();

        // Ajouter les articles traduits et leurs images dans le sitemap
        $articles->each(function ($article) use ($sitemap) {
            $article->traductions->each(function ($translation) use ($article, $sitemap) {
                
                // Construire l'URL de l'article en fonction de la langue
                $url = Url::create("/{$translation->langue}/articles/{$article->slug}")
                    ->setLastModificationDate($article->updated_at);

                if ($translation->traduction['illustration']) {
                    $url->addImage($translation->traduction['illustration']['link']);
                }

                // Ajouter l'URL avec les images au sitemap
                $sitemap->add($url);
            });
        });

        // Écrire le sitemap dans un fichier XML
        $sitemap->writeToFile(public_path('sitemap.xml'));

        // Message de confirmation
        $this->info('Sitemap généré avec succès!');
    }
}
