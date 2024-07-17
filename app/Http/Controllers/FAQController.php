<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FAQController extends Controller
{
    public function index()
    {
        $faqs = FAQ::all();

        return Inertia::render('FAQ/Index', ['faqs' => $faqs]);
    }
}
