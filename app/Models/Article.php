<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class Article extends Model
{
    use HasFactory;
    use HasUuids;

    public function traduction()
    {
        return $this->morphOne(Traduction::class, 'traductionable')->where('lang', App::getLocale());
    }
}
