<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileStoreRequest;
use App\Http\Resources\ImageCollection;
use App\Models\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImageController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Images/Index', [
            'filters' => Request::all('search', 'trashed'),
            'images' =>  new ImageCollection(
                File::filter(Request::only('search', 'trashed'))
                ->orderBy('created_at', 'desc')
                ->paginate()
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Images/Create');
    }

    public function store(FileStoreRequest $request)
    {
        $name = Request::file('file')->store();

        File::create([
            'label' => $request->label,
            'name' => $name,
            'size' => $request->file('file')->getSize(),
            'mime_type' => $request->file('file')->getMimeType(),
            'link' => Storage::url($name),
        ]);
        
        return Redirect::route('images.index')->with('success', 'Article created.');
    }

    public function edit(File $image)
    {
        return Inertia::render('Dashboard/Images/Edit', [
            'image' => $image,
        ]);
    }

    public function update(File $image, FileStoreRequest $request)
    {
        $image->update($request->validated());

        return Redirect::back()->with('success', 'Article updated.');
    }

    public function destroy(File $image)
    {
        $image->delete();

        return Redirect::back()->with('success', 'Article deleted.');
    }
}
