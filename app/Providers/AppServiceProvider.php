<?php

namespace App\Providers;

use App\Inertia\InertiaHttpGateway;
use Illuminate\Support\ServiceProvider;
use Inertia\Ssr\HttpGateway;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        HttpGateway::class => InertiaHttpGateway::class,
    ]; 

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
