<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\KeywordStroreOrUpdateRequest;
use App\Models\Keyword;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class KeywordController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Keyword/Index', [
            'filters' => Request::all('search'),
            'keywords' => new ResourceCollection(
                Keyword::filter(Request::only('search'))
                ->orderBy('label', 'asc')
                ->paginate()
            ),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Keyword/Create');
    }

    public function store(KeywordStroreOrUpdateRequest $request): RedirectResponse {
        Keyword::create($request->validated());

        return Redirect::route('dashboard.keywords.index')->with('success', 'Keyword created.');
    }

    public function edit(Keyword $keyword): Response
    {
        return Inertia::render('Dashboard/Keyword/Edit', [
            'keyword' => $keyword,
        ]);
    }

    public function update(Keyword $keyword, KeywordStroreOrUpdateRequest $request): RedirectResponse {
        $keyword->updateOrFail($request->validated());
        
        return Redirect::back()->with('success', 'keyword updated.');
    }

    public function destroy(Keyword $keyword): RedirectResponse {
        $keyword->deleteOrFail();

        return Redirect::back()->with('success', 'keyword deleted.');
    }
}
