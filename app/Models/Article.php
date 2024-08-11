<?php

namespace App\Models;

use App\Helpers\HasTraduction;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\App;

class Article extends Model
{
    use HasFactory, HasUuids, HasTraduction, SoftDeletes;

    protected $fillable = ['illustration_id', 'title', 'slug', 'published_at'];

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->withTrashed()->firstOrFail();
    }

    public function scopeWithTraductionInLocale(Builder $query)
    {
        return $query->with('traductions', function ($query) {
            return $query->where('langue', App::getLocale());
        });
    }

    public function illustration()
    {
        return $this->belongsTo(File::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class)->using(ArticleCategory::class)->withTimestamps();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, fn ($query, string $search) =>
            $query->where(fn ($query) =>
                $query->where('title', 'like', '%'.$search.'%')
            )
        );

        $query->when($filters['trashed'] ?? null, function ($query, string $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
}
