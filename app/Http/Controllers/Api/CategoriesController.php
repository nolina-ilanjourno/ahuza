<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Support\Facades\Request;

class CategoriesController extends Controller 
{
    public function index()
    {
        return new CategoryCollection(Category::with('traductions')
        ->filter(Request::only('search', 'trashed'))
        ->paginate()
        ->appends(Request::all()));
    }
}