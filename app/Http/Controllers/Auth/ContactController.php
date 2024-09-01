<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Request;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Contact/Index', [
            'filters' => Request::all('search'),
            'contacts' => new ResourceCollection(
                Contact::with('customer')
                ->filter(Request::only('search'))
                ->paginate()
            ),
        ]);
    }

    public function show(Contact $contact): Response
    {
        return Inertia::render('Dashboard/Contact/Show', [
            'contact' => $contact->load('customer'),
        ]);
    }
}
