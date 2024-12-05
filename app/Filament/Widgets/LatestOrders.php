<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\OrdersResource;
use App\Models\Order;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestOrders extends BaseWidget
{

    protected int | string | array $columnSpan = "full";

    protected static ?int $sort = 2;

    public function table(Table $table): Table
    {
        return $table
            ->query(OrdersResource::getEloquentQuery())
            ->defaultPaginationPageOption(5)
            ->defaultSort('updated_at', 'desc')
            ->columns([
                TextColumn::make('user.name')
                    ->label('Покупатель')
                    ->sortable()
                    ->searchable(),
                SelectColumn::make('status')
                    ->label('Статус заказа')
                    ->sortable()
                    ->options([
                        'new' => 'Новый',
                        'processing' => 'Обработка',
                        'shipping' => 'Ожидает',
                        'delivered' => 'Доставлен',
                        'canceled' => 'Отменен'
                    ]),
                TextColumn::make('grand_total')
                    ->label('Общая сумма заказа')
                    ->numeric()
                    ->sortable(),
                SelectColumn::make('pay_method')
                    ->label('Способ оплаты')
                    ->sortable()
                    ->searchable()
                    ->options([
                        'stripe' => 'Оплата картой',
                        'cod' => 'Оплата при получении'
                    ]),
                SelectColumn::make('shipping_method')
                    ->label('Тип доставки')
                    ->sortable()
                    ->searchable()
                    ->options([
                        'russian' => 'Почта России',
                        'delov' => 'Деловые линии',
                        'sdek' => 'СДЭК',
                        'pel' => 'ПЭК',
                        'nefr' => 'НЕФР'
                    ]),
            ])
            ->actions([
                Action::make('Подробнее')
                ->url(fn (Order $record):string => OrdersResource::getUrl('view', ['record' => $record]))
                ->color('info')
                ->icon('heroicon-o-eye'),
            ]);
    }
}
