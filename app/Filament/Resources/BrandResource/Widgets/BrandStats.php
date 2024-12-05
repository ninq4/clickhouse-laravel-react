<?php

namespace App\Filament\Resources\BrandResource\Widgets;

use App\Models\Brand;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class BrandStats extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make("Активные бренды", Brand::query()->where('is_active', true)->count()),
        ];
    }
}
