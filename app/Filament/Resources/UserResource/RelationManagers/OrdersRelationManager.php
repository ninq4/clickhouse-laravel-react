<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Filament\Resources\OrdersResource;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrdersRelationManager extends RelationManager
{
    protected static string $relationship = 'orders';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('id')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('id')
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('Код заказа')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('status')
                    ->searchable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'new' => 'info',
                        'processing' => 'warning',
                        'shipping' => 'success',
                        'delivered' => 'success',
                        'canceled' => 'danger'
                    })
                    ->icon(fn (string $state): string => match ($state) {
                        'new' => 'heroicon-o-sparkles',
                        'processing' => 'heroicon-o-clock',
                        'shipping' => 'heroicon-o-truck',
                        'delivered' => 'heroicon-o-archive-box',
                        'canceled' => 'heroicon-o-archive-box-x-mark'   
                    })
                    ->label('Статус заказа'),
                TextColumn::make('pay_method')
                    ->searchable()
                    ->badge()
                    ->label('Метод оплаты'),
                TextColumn::make('pay_status')
                    ->searchable()
                    ->badge()
                    ->label('Статус оплаты'),
                TextColumn::make('updated_at')
                    ->label('Дата оформления зазка')
                    ->dateTime('d F Y'),

            ])
            ->filters([
                //
            ])
            ->headerActions([
                //
            ])
            ->actions([
                Action::make('Подробнее о заказе')
                    ->url(fn (Order $record):string => OrdersResource::getUrl('view', ['record' => $record]))
                    ->color('info')
                    ->icon('heroicon-o-eye'),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
