<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Keyword;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Request;

class KeywordController extends Controller 
{
    public function index()
    {
        return new ResourceCollection(
            Keyword::filter(Request::only('search', 'trashed'))
            ->orderBy('label', 'asc')
            ->paginate()
            ->appends(Request::all())
        );
    }
}