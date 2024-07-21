<?php

namespace App\Models;

use App\Helpers\HasTraduction;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;

class Category extends Model
{
    use HasFactory, HasUuids, HasTraduction, SoftDeletes;

    protected $fillable = [
        'label',
        'background_color',
        'text_color',
    ];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, fn ($query, string $search) =>
            $query->where(fn ($query) =>
                $query->where('name', 'like', '%'.$search.'%')
            )
        );

        $query->when($filters['trashed'] ?? null, function ($query, bool $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
}
