<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileStoreRequest;
use App\Http\Requests\FileUpdateRequest;
use App\Models\File;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;
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
            'images' =>  new ResourceCollection(
                File::filter(Request::only('search', 'trashed'))
                ->orderBy('label', 'asc')
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
        
        return Redirect::route('dashboard.images.index')->with('success', 'Article created.');
    }

    public function edit(File $image)
    {
        return Inertia::render('Dashboard/Images/Edit', [
            'image' => $image,
        ]);
    }

    public function update(File $image, FileUpdateRequest $request)
    {
        // Update the label
        $image->label = $request->label;

        // If a new file is uploaded, process it
        if ($request->hasFile('file')) {
            // Delete the old file
            Storage::delete($image->name);

            // Store the new file
            $name = $request->file('file')->store();

            // Update file-related fields
            $image->name = $name;
            $image->size = $request->file('file')->getSize();
            $image->mime_type = $request->file('file')->getMimeType();
            $image->link = Storage::url($name);
        }

        $image->save();

        return Redirect::back()->with('success', 'Article updated.');
    }

    public function destroy(File $image)
    {
        $image->delete();

        return Redirect::back()->with('success', 'Article deleted.');
    }

    public function restore(File $file): RedirectResponse
    {
        $file->restore();

        return Redirect::back()->with('success', 'Image restored.');
    }
}
