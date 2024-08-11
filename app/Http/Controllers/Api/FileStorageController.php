<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileStoreRequest;
use App\Models\File;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;

class FileStorageController extends Controller
{
      public function index()
    {
        return new ResourceCollection(File::paginate()
        ->appends(Request::all()));
    }

    public function store(FileStoreRequest $request)
    {
        $name = $request->file('file')->store();

        $file = File::create([
            'label' => $request->label,
            'name' => $name,
            'size' => $request->file('file')->getSize(),
            'mime_type' => $request->file('file')->getMimeType(),
            'link' => Storage::url($name),
        ]);

        return $file;
    }
}
