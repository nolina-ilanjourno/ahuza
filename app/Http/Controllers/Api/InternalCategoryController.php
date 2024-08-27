<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InternalCategory;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Request;

class InternalCategoryController extends Controller 
{
    public function index()
    {
        return new ResourceCollection(
            InternalCategory::filter(Request::only('search', 'trashed'))
            ->paginate()
            ->appends(Request::all())
        );
    }
}