<?php

namespace App\Filament\Resources\ProductResource\Pages;

use App\Filament\Resources\ProductResource;
use App\Filament\Resources\ProductResource\Widgets\ProductStats;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

class ListProducts extends ListRecords
{
    protected static string $resource = ProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            ProductStats::class,
        ];
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make("Все товары"),
            "active" => Tab::make("Активные товары")->query(fn ($query) => $query->where("is_active", true)),
            "featured" => Tab::make("Популярные товары")->query(fn ($query) => $query->where('is_featured', true)),
            "sale" => Tab::make("Товары по скидке")->query(fn ($query) => $query->where('is_sale', true)),  
            "stock" => Tab::make("Закончились")->query(fn ($query) => $query->where('is_stock', false)),
        ];
    }
}
