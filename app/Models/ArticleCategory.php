<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ArticleCategory extends Pivot
{
    use HasUuids;

    public $incrementing = false;

    protected $keyType = 'uuid';

    protected $fillable = [
        'category_id',
        'article_id',
    ];
}

