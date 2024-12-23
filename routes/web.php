<?php

use App\Http\Controllers\Product;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [Product::class, 'index']);

require __DIR__ . '/auth.php';
