<?php

use App\Http\Controllers\Auth\ArticleController;
use App\Http\Controllers\Auth\CategoryController;
use App\Http\Controllers\Auth\FAQController;
use App\Http\Controllers\Auth\DashboardController;
use App\Http\Controllers\FileStorageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('welcome');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');

Route::middleware('auth')->group(function () {
    Route::post('/files', [FileStorageController::class, 'store'])->name('files.store');
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/categories', CategoryController::class);
    Route::resource('/articles', ArticleController::class);
    Route::put('/articles/{article}/restore', [ArticleController::class, 'restore'])->name('articles.restore');
    Route::get('/faq', [FAQController::class, 'index'])->name('faqs.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->prefix('/dashboard');

require __DIR__.'/auth.php';
require __DIR__.'/api.php';
