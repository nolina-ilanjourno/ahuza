<?php

namespace App\Helpers;

use App\Models\Traduction;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

trait HasTraduction
{
    public function traductions(): MorphToMany
    {
        return $this->morphToMany(Traduction::class, 'traductionable')->withTimeStamps();
    }
}