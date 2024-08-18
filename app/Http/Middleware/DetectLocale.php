<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class DetectLocale
{
    public function handle($request, Closure $next)
    {
        // Liste des langues supportées par votre application
        $availableLocales = ['en', 'fr', 'he'];

        // Détection de la langue à partir de l'en-tête 'Accept-Language'
        $locale = $request->getPreferredLanguage($availableLocales);

        // Définir la locale dans l'application
        App::setLocale($locale);

        return $next($request);
    }
}
