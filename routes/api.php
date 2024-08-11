<?php

use App\Http\Controllers\Api\ArticlesController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\FileStorageController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api')->group(function () {
    Route::get('/categories', [CategoriesController::class, 'index']);
    Route::post('/files', [FileStorageController::class, 'store']);
    Route::get('/files', [FileStorageController::class, 'index']);
    Route::get('/articles', [ArticlesController::class, 'index']);
    Route::get('/token', function () {
        return csrf_token(); 
    });
});