<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ArticleInternalCategory extends Pivot
{
    protected $fillable = [
        'internal_category_id',
        'article_id',
    ];
}

