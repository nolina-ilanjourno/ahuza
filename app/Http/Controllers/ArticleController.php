<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Articles/Index', [
            'filters' => Request::all('search'),
            'articles' => new ResourceCollection(
                Article::with(['categories', 'illustration'])
                ->filter(Request::only('search'))
                ->whereNot('published_at', null)
                ->orderBy('published_at', 'desc')
                ->paginate(1)
            )
        ]);
    }

    public function show(Article $article)
    {
        return Inertia::render('Articles/Show', ['article' => $article->load(['traductions', 'categories', 'illustration'])]);
    }
}
