<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\InternalCategoryStoreOrUpdateRequest;
use App\Models\InternalCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class InternalCategoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/InternalCategory/Index', [
            'filters' => Request::all('search'),
            'categories' => new ResourceCollection(
                InternalCategory::filter(Request::only('search'))
                ->orderBy('label', 'asc')
                ->paginate()
            ),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/InternalCategory/Create');
    }

    public function store(InternalCategoryStoreOrUpdateRequest $request): RedirectResponse {
        InternalCategory::create($request->validated());

        return Redirect::route('dashboard.internal-categories.index')->with('success', 'Internal Category created.');
    }

    public function edit(InternalCategory $internal_category): Response
    {
        return Inertia::render('Dashboard/InternalCategory/Edit', [
            'category' => $internal_category,
        ]);
    }

    public function update(InternalCategory $internal_category, InternalCategoryStoreOrUpdateRequest $request): RedirectResponse {
        $internal_category->updateOrFail($request->validated());
        
        return Redirect::back()->with('success', 'Category updated.');
    }

    public function destroy(InternalCategory $internal_category): RedirectResponse {
        $internal_category->deleteOrFail();

        return Redirect::back()->with('success', 'Category deleted.');
    }
}
