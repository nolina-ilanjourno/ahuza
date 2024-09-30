<?php

use App\Http\Controllers\Api\ArticlesController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\FileStorageController;
use App\Http\Controllers\Api\InternalCategoryController;
use App\Http\Controllers\Api\KeywordController;
use App\Http\Controllers\Api\KeywordGroupController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api')->group(function () {
    Route::get('/categories', [CategoriesController::class, 'index']);
    Route::get('/internal-categories', [InternalCategoryController::class, 'index']);
    Route::get('/keywords', [KeywordController::class, 'index']);
    Route::get('/keyword-groups', [KeywordGroupController::class, 'index']);
    Route::post('/files', [FileStorageController::class, 'store']);
    Route::get('/files/list', [FileStorageController::class, 'list'])->name('files.list');
    Route::get('/files', [FileStorageController::class, 'index']);
    Route::get('/articles', [ArticlesController::class, 'index']);
});