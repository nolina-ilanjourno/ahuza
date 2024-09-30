<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\KeywordGroup;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Request;

class KeywordGroupController extends Controller 
{
    public function index()
    {
        return new ResourceCollection(
            KeywordGroup::with('keywords')->filter(Request::only('search', 'trashed'))
            ->orderBy('label', 'asc')
            ->paginate()
            ->appends(Request::all())
        );
    }
}