<?php

namespace App\Models;

use App\Http\Requests\FileStoreRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->withTrashed()->firstOrFail();
    }

    public static function store(FileStoreRequest $request)
    {
        $name = $request->file('file')->store();

        $file = File::create([
            'label' => $request->label,
            'name' => $name,
            'size' => $request->file('file')->getSize(),
            'mime_type' => $request->file('file')->getMimeType(),
            'link' => Storage::url($name),
        ]);

        return $file;
    }

     public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, fn ($query, string $search) =>
            $query->where(fn ($query) =>
                $query->whereRaw('LOWER(label) LIKE ?', ['%' . strtolower($search) . '%'])
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
