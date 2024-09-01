<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'customer_id',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, fn ($query, string $search) =>
            $query->where(fn ($query) =>
                $query->whereRaw('LOWER(message) LIKE ?', ['%' . strtolower($search) . '%'])
            )
        );
    }
}
