<?php

use App\Http\Controllers\Api\CategoriesController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::get('categories', [CategoriesController::class, 'index']);
})->middleware('auth');