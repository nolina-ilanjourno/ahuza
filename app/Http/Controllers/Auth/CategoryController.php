<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryUpdateRequest;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use App\Models\Traduction;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

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

    public function create(): Response
    {
        return Inertia::render('Category/Create');
    }

    public function edit(Category $category): Response
    {
        return Inertia::render('Category/Edit', [
            'category' => $category->load('traductions'),
        ]);
    }

    public function update(Category $category, CategoryUpdateRequest $request): RedirectResponse {
        $category->updateOrFail($request->validated());
        
        if ($request->has('traductions')) {
            $traductionIds = collect($request->traductions)->map(function ($data) {
                $traduction = Traduction::updateOrCreate(
                    [
                        'langue' => $data['langue'],
                        'traduction' => $data['traduction']
                    ],
                    [
                        'langue' => $data['langue'],
                        'traduction' => $data['traduction']
                    ]
                );
                return $traduction->id;
            });

            $category->traductions()->sync($traductionIds);
        }

        return Redirect::back()->with('success', 'Organization updated.');
    }
}