<?php

use App\Http\Controllers\Product;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [Product::class, 'index']);
Route::get('/catalog', [Product::class, 'catalog']);

Route::get('/catalog/{slug}', [Product::class, 'getProductsByCategory']);

Route::get('/product/{slug}', [Product::class, 'getProductBySlug']);

require __DIR__ . '/auth.php';
