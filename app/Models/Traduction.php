<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traduction extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'langue',
        'traduction',
    ];

    public function traductionable()
    {
        return $this->morphTo();
    }
}
