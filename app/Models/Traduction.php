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

    protected $casts = [
        'traduction' => 'array',
    ];

    public function traductionable()
    {
        return $this->morphTo();
    }

    public function getTraductionAttribute($value)
    {
        // Vérifie si la valeur est un JSON valide
        if (is_string($value) && $this->isJson($value)) {
            return json_decode($value, true);
        }
        // Si ce n'est pas un JSON valide, retourne la valeur brute
        return $value;
    }

    protected function isJson($string)
    {
        json_decode($string);
        return (json_last_error() === JSON_ERROR_NONE);
    }


    public function setTraductionAttribute($value)
    {
        // Si la valeur est un tableau ou un objet, l'encoder en JSON
        if (is_array($value) || is_object($value)) {
            $this->attributes['traduction'] = json_encode($value);
        } else {
            // Si c'est une chaîne de caractères, la stocker telle quelle
            $this->attributes['traduction'] = $value;
        }
    }
}
