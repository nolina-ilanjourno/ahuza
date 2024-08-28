<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        if($request->segment(1) !== 'dashboard' && $request->segment(1) !== 'set-locale') {
            $availableLocales = ['en', 'fr', 'he'];
            $sessionLocale = Session::get('locale');
            $routeLocale = $request->route('locale') && in_array($request->route('locale'), $availableLocales) ? $request->route('locale') : null;
            $locale = $routeLocale ?? $sessionLocale ?? $request->getPreferredLanguage($availableLocales);
            
            if (!$routeLocale && $request->segment(1)) {
                return Redirect::to('/' . $locale . $request->getRequestUri());
            }
            
            if($locale !== $sessionLocale) {
                Session::put('locale', $locale);
            }
        }

        return $next($request);
    }
}
