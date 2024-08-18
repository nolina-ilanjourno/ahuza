<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleStoreOrUpdateRequest;
use App\Http\Resources\ArticleCollection;
use App\Models\Article;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Articles/Index', [
            'filters' => Request::all('search', 'trashed', 'published'),
            'articles' =>  new ArticleCollection(
                Article::with(['categories', 'illustration'])->filter(Request::only('search', 'trashed', 'published'))
                ->orderBy('title', 'asc')
                ->paginate(30)
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Articles/Create');
    }

    public function store(ArticleStoreOrUpdateRequest $request): RedirectResponse
    {
        $article = Article::create($request->validated());

        if ($request->has('traductions')) {
            $article->traductions()->createMany($request->traductions);
        }

        $article->categories()->attach($request->category_ids);

        return Redirect::route('dashboard.articles.index')->with('success', 'Article created.');
    }

     public function edit(Article $article)
    {
        return Inertia::render('Dashboard/Articles/Edit', [
            'article' => $article->load(['categories', 'traductions', 'illustration']),
        ]);
    }

    public function update(Article $article, ArticleStoreOrUpdateRequest $request): RedirectResponse
    {
        $article->update($request->validated());

        if ($request->has('traductions')) {
            $article->traductions()->delete();
            $article->traductions()->createMany($request->traductions);
        }

        $article->categories()->sync($request->category_ids);

        return Redirect::back()->with('success', 'Article updated.');
    }

    public function destroy(Article $article): RedirectResponse
    {
        $article->delete();

        return Redirect::route('dashboard.articles.index')->with('success', 'Article deleted.');
    }

     public function restore(Article $article): RedirectResponse
    {
        $article->restore();

        return Redirect::back()->with('success', 'Article restored.');
    }
}
