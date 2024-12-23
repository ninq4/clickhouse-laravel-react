<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product as ModelsProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Product extends Controller
{
    public function index()
    {
        $allProducts = ModelsProduct::all();
        $discountProducts = ModelsProduct::where('is_sale', true)->get();
        $popularProducts = ModelsProduct::where('is_featured', true)->get();
        $popularCategory = Category::where('is_popular', true)->get();
        return Inertia::render('index', [
            'products' => $allProducts,
            'discountProducts' => $discountProducts,
            'popularProducts' => $popularProducts,
            'popularCategory' => $popularCategory
        ]);
    }
}
