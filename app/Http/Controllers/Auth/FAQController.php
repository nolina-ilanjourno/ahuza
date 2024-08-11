<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FAQStoreOrUpdateRequest;
use App\Models\FAQ;
use App\Models\Traduction;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class FAQController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/FAQ/Index', [
            'filters' => Request::all('search', 'trashed'),
            'faqs' => new ResourceCollection(
                FAQ::with('traductions')
                ->filter(Request::only('search', 'trashed'))
                ->orderBy('created_at', 'desc')
                ->paginate()
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/FAQ/Create');
    }

    public function store(FAQStoreOrUpdateRequest $request)
    {
        $faq = FAQ::create($request->validated());
        
        if ($request->has('traductions')) {
            $faq->traductions()->createMany($request->traductions);
        }

        return Redirect::route('dashboard.faqs.index')->with('success', 'FAQ created.');
    }


    public function edit(FAQ $faq)
    {
        return Inertia::render('Dashboard/FAQ/Edit', [
            'faq' => $faq->load('traductions'),
        ]);
    }

    public function update(FAQ $faq, FAQStoreOrUpdateRequest $request)
    {
        $faq->updateOrFail($request->validated());
        
        if ($request->has('traductions')) {
            $faq->traductions()->delete();
            $faq->traductions()->createMany($request->traductions);
        }

        return Redirect::route('dashboard.faqs.index')->with('success', 'FAQ updated.');
    }

    public function destroy(FAQ $faq)
    {
        $faq->delete();

        return Redirect::route('dashboard.faqs.index')->with('success', 'FAQ deleted.');
    }
}
