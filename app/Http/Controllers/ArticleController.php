<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Articles/Index', [
            'filters' => Request::all('search'),
            'articles' => new ResourceCollection(
                Article::with(['categories'])
                ->withTraductionInLocale()
                ->filter(Request::only('search'))
                ->where('published_at', '<=', now())
                ->orderBy('published_at', 'desc')
                ->paginate(30)
            )
        ]);
    }

    public function show(string $locale, Article $article)
    {
        $article = $article->load(['categories', 'traductions' => fn ($query) => $query->where('langue', $locale)]);

        if($article->traductions->isEmpty()) {
           throw new NotFoundHttpException();
        }

        return Inertia::render('Articles/Show', ['article' => $article]);
    }
}
