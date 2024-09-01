<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerStoreOrUpdateRequest;
use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Request;

class CustomerController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Customer/Index', [
            'filters' => Request::all('search'),
            'customers' => new ResourceCollection(
                Customer::filter(Request::only('search'))
                ->paginate()
            ),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Customer/Create');
    }

    public function edit(Customer $customer): Response
    {
        return Inertia::render('Dashboard/Customer/Edit', [
            'customer' => $customer,
        ]);
    }

    public function update(Customer $customer, CustomerStoreOrUpdateRequest $request): RedirectResponse {
        $customer->updateOrFail($request->validated());
        
        return Redirect::back()->with('success', 'Customer updated.');
    }

    public function destroy(Customer $customer): RedirectResponse {
        $customer->delete();

        return Redirect::back()->with('success', 'Customer deleted.');
    }
}
