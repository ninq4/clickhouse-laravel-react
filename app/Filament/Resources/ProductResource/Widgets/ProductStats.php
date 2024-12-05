<?php

namespace App\Filament\Resources\ProductResource\Widgets;

use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProductStats extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make("Активных товаров", Product::query()->where("is_active", true)->count()),
            Stat::make("Популярных товаров", Product::query()->where("is_featured", true)->count()),
            Stat::make("Товаров учавствующих в скидке", Product::query()->where("is_sale", true)->count()),
            Stat::make("Товаров в наличии", Product::query()->where('is_stock', true)->count()),
            Stat::make("Товаров закончилось", Product::query()->where('is_stock', false)->count()),
        ];
    }
}
