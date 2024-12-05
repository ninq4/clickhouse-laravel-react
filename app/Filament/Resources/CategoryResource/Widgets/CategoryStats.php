<?php

namespace App\Filament\Resources\CategoryResource\Widgets;

use App\Models\Category;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class CategoryStats extends BaseWidget
{

    public function getColumnSpan(): int|string|array
    {
        return 2;
    }

    protected function getStats(): array
    {
        return [
            Stat::make("Активные категории", Category::query()->where("is_active", true)->count()),
        ];
    }
}
