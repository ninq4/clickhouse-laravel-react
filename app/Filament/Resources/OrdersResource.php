<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrdersResource\Pages;
use App\Filament\Resources\OrdersResource\Pages\ViewOrders;
use App\Filament\Resources\OrdersResource\RelationManagers\AddressRelationManager;
use App\Models\Order;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ToggleButtons;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Number;

class OrdersResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationLabel = "Заказы";

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    protected static ?string $modelLabel = 'Заказ';
    
    protected static ?string $pluralModelLabel = 'Заказы';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()->schema([
                    Section::make('Информация о заказе')->schema([
                        Select::make('user_id')
                            ->label('Покупатель')
                            ->preload()
                            ->helperText('Список пользователей')
                            ->relationship('user', 'name')
                            ->searchable()
                            ->required(),
                        Select::make('pay_method')
                            ->options([
                                'stripe' => 'Оплата картой',
                                'cod' => 'Оплата при получении'
                            ])
                            ->label('Тип оплаты')
                            ->helperText('Выберите тип оплаты')
                            ->required(),
                        Select::make('pay_status')
                            ->options([
                                'success' => 'Оплачено',
                                'pending' => 'В обработке',
                                'failed' => 'Отказано'
                            ])
                            ->label('Статус оплаты')
                            ->default('pending')
                            ->helperText('Выберите статус оплаты')
                            ->required(),
                        ToggleButtons::make('status')
                                ->options([
                                    'new' => 'Новый',
                                    'processing' => 'Обработка',
                                    'shipping' => 'Ожидает',
                                    'delivered' => 'Доставлен',
                                    'canceled' => 'Отменен'
                                ])
                                ->colors([
                                    'new' => 'info',
                                    'processing' => 'warning',
                                    'shipping' => 'success',
                                    'delivered' => 'success',
                                    'canceled' => 'danger'
                                ])
                                ->icons([
                                    'new' => 'heroicon-o-sparkles',
                                    'processing' => 'heroicon-o-clock',
                                    'shipping' => 'heroicon-o-truck',
                                    'delivered' => 'heroicon-o-archive-box',
                                    'canceled' => 'heroicon-o-archive-box-x-mark'    
                                ])
                                ->label('Статус заказа')
                                ->default('new')
                                ->helperText('Выберите статус заказа')
                                ->required()
                                ->inline(),
                            Select::make('currency')
                                ->options([
                                    'rub' => 'Рубль',
                                    'usd' => 'Доллар',
                                    'eur' => 'Евро',
                                     
                                ])
                                ->label('Валюта оплаты')
                                ->helperText('Выберите валюту для оплаты'),
                            Select::make('shipping_method')
                                ->options([
                                    'russian' => 'Почта России',
                                    'delov' => 'Деловые линии',
                                    'sdek' => 'СДЭК',
                                    'pel' => 'ПЭК',
                                    'nefr' => 'НЕФР'
                                ])
                                ->label("Доставка")
                                ->helperText('Выберите тип доставки'),
                            Textarea::make('notes')
                            ->label('примечания')
                            ->helperText('Например: осторожно, хрупкий сердце')
                    ])->columnSpanFull(),
                    Section::make('Order Items')->schema([
                        Repeater::make('items')
                            ->relationship()
                            ->schema([

                                Select::make('product_id')
                                    ->relationship('product', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->required()
                                    ->distinct()
                                    ->disableOptionsWhenSelectedInSiblingRepeaterItems()
                                    ->columnSpan(4)
                                    ->reactive()
                                    ->afterStateUpdated(fn ($state, Set $set) => $set('unit_amount', optional(Product::find($state))->price ?? 0))

                                    ->afterStateUpdated(fn ($state, Set $set) => $set('total_amount', optional(Product::find($state))->price ?? 0)),

                                
                                TextInput::make('quantity')
                                    ->numeric()
                                    ->required()
                                    ->default(1)
                                    ->minValue(1)
                                    ->columnSpan(2)
                                    ->reactive()
                                    ->afterStateUpdated(fn ($state, Set $set, Get $get) => $set('total_amount', $state*$get('unit_amount'))),
                                
                                TextInput::make('unit_amount')
                                    ->numeric()
                                    ->required()
                                    ->disabled()
                                    ->dehydrated()
                                    ->columnSpan(3),
                                
                                TextInput::make('total_amount')
                                    ->numeric()
                                    ->required()
                                    ->dehydrated()
                                    ->columnSpan(3)

                            ])->columns(12),

                            Placeholder::make('grand_total_placeholder')
                                ->label('Grand Total')
                                ->content(function (Get $get, Set $set){
                                    $total = 0;
                                    if(!$repeaters = $get('items')){
                                        return $total;
                                    }

                                    foreach($repeaters as $key => $reapeater) {
                                        $total += $get("items.{$key}.total_amount");
                                    }

                                    $set('grand_total', $total);
                                    return \Illuminate\Support\Number::currency($total, 'INR');
                                }),


                            Hidden::make('grand_total')
                                ->default(0)

                    ]),

                ])->columnSpanFull(),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
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
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            AddressRelationManager::class,
        ];
    }

    // Отображение кол-во записей
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    // Отображение цвета для ярлыка
    public static function getNavigationBadgeColor(): string|array|null
    {
        return static::getModel()::count() >= 10 ? 'danger' : 'success';
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrders::route('/create'),
            'view' => Pages\ViewOrders::route('/{record}'),
            'edit' => Pages\EditOrders::route('/{record}/edit'),
        ];
    }
}
