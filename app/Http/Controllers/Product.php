<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product as ModelsProduct;
use Inertia\Inertia;

class Product extends Controller
{
    public function index()
    {
        $allProducts = ModelsProduct::take(10)->get();

        $discountProducts = ModelsProduct::where('is_sale', true)->take(10)->get();

        $popularProducts = ModelsProduct::where('is_featured', true)->take(10)->get();

        $popularCategory = Category::where('is_popular', true)->take(10)->get();

        return Inertia::render('index', [
            'products' => $allProducts,
            'discountProducts' => $discountProducts,
            'popularProducts' => $popularProducts,
            'popularCategory' => $popularCategory
        ]);
    }

    public function catalog()
    {
        $allCategories = Category::all();

        return Inertia::render('catalog/index', [
            'categories' => $allCategories
        ]);
    }
    public function getProductsByCategory($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();

        $products = $category->products()->get();

        return Inertia::render('catalog/products/index', [
            'products' => $products,
            'category' => $category
        ]);
    }
}
