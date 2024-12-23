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

        $discountProducts = ModelsProduct::where('is_sale', true)->where('is_active', true)->take(4)->get();

        $popularProducts = ModelsProduct::where('is_featured', true)->where('is_active', true)->take(4)->get();

        $popularCategory = Category::where('is_popular', true)->where('is_active', true)->take(10)->get();

        return Inertia::render('index', [
            'products' => $allProducts,
            'discountProducts' => $discountProducts,
            'popularProducts' => $popularProducts,
            'popularCategory' => $popularCategory
        ]);
    }

    public function catalog()
    {
        $allCategories = Category::all()->where('is_active', true);

        return Inertia::render('catalog/index', [
            'categories' => $allCategories
        ]);
    }
    public function getProductsByCategory($slug)
    {
        $category = Category::where('slug', $slug)->where('is_active', true)->firstOrFail();

        $products = $category->products()->where('is_active', true)->get();

        return Inertia::render('catalog/products/index', [
            'products' => $products,
            'category' => $category
        ]);
    }
    public function getProductBySlug($slug)
    {
        $product = ModelsProduct::where('slug', $slug)->where('is_active', true)->firstOrFail();

        return Inertia::render('product/index', [
            'product' => $product
        ]);
    }
}
