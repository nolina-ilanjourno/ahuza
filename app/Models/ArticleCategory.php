<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ArticleCategory extends Pivot
{
    protected $fillable = [
        'category_id',
        'article_id',
    ];
}

