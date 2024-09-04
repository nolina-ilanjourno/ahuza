<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traduction extends Model
{
    use HasFactory;

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
        if (is_string($value) && $this->isJson($value)) {
            $result =  json_decode($value, true);

            if(array_key_exists('illustration_id', $result)){
                $result['illustration'] = File::find($result['illustration_id']);
            }

            return $result;
        }

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
