<?php

namespace App\Filament\Resources\OrdersResource\Pages;

use App\Filament\Resources\OrdersResource;
use App\Filament\Resources\OrdersResource\Widgets\OrdersStatic;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

class ListOrders extends ListRecords
{
    protected static string $resource = OrdersResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            OrdersStatic::class,
        ];
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make('Все заказы'),
            'new' => Tab::make('Новые заказы')->query(fn ($query) => $query->where('status', 'new')),
            'proccessing' => Tab::make('Заказы в обработке')->query(fn ($query) => $query->where('status', 'processing')),
        ];
    }
}
