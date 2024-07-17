<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('Articles/Index', ['articles' => $articles]);
    }

    public function create()
    {
        return Inertia::render('Articles/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        $article = new Article;
        $article->title = $request->title;
        $article->content = $request->content;
        $article->save();

        return redirect()->route('articles.index')->with('success', 'Article created successfully');
    }

    public function show(Article $article)
    {
        return Inertia::render('Articles/Show', ['article' => $article]);
    }

    public function edit(Article $article)
    {
        return Inertia::render('Articles/Edit', ['article' => $article]);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        $article->title = $request->title;
        $article->content = $request->content;
        $article->save();

        return redirect()->route('articles.index')->with('success', 'Article updated successfully');
    }

    public function destroy(Article $article)
    {
        $article->delete();
        return redirect()->route('articles.index')->with('success', 'Article deleted successfully');
    }
}
