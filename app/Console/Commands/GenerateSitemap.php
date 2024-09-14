<?php 

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Article; // Utilise ton propre modèle

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Génère le sitemap pour le site';

    public function handle()
    {
        $sitemap = Sitemap::create();

        $sitemap->add(Url::create('/fr'));
        $sitemap->add(Url::create('/en'));
        $sitemap->add(Url::create('/he'));
        $sitemap->add(Url::create('/fr/articles'));
        $sitemap->add(Url::create('/en/articles'));
        $sitemap->add(Url::create('/he/articles'));

        $articles =  Article::with('traductions')
        ->where('published_at', '<=', 'now()')
        ->get();
              
        foreach ($articles as $article) {
            $traductions = $article->traductions()->pluck('langue')->toArray();
            foreach ($traductions as $locale) {
                $sitemap->add(Url::create("/$locale/articles/{$article->slug}")
                    ->setLastModificationDate($article->updated_at)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                    ->setPriority(0.8));
            }
        }
        
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap généré avec succès!');
    }
}
