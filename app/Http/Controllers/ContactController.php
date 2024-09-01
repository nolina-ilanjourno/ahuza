<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactStoreRequest;
use App\Models\Contact;
use App\Models\Customer;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function store(ContactStoreRequest $request)
    {
        $customer = Customer::firstOrCreate($request->only('email'), $request->only('fullname', 'email'));

        Contact::create([
            'message' => $request->message,
            'customer_id' => $customer->id,
        ]);

        return Redirect::back()->with('success', 'Message sent successfully');
    }
}
