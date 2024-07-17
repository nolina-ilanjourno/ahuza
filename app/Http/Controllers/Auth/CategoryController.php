<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Request;

class CategoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Category/Index', [
            'filters' => Request::all('search', 'trashed'),
            'categories' => new CategoryCollection(
                Category::with('traductions')
                ->filter(Request::only('search', 'trashed'))
                ->paginate()
                ->appends(Request::all())
            ),
        ]);
    }

    public function edit(Category $category): Response
    {
        return Inertia::render('Category/Edit', [
            'category' => $category->load('traductions'),
        ]);
    }
}