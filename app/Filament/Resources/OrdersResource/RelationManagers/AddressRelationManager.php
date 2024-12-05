<?php

namespace App\Filament\Resources\OrdersResource\RelationManagers;

use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AddressRelationManager extends RelationManager
{
    protected static string $relationship = 'address';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('first_name')
                    ->label('Имя')
                    ->maxLength(255)
                    ->required(),
                TextInput::make('last_name')
                    ->label('Фамилия')
                    ->maxLength(255)
                    ->required(),
                TextInput::make('phone')
                    ->label('Номер телефона')
                    ->tel()
                    ->maxLength(11)
                    ->required(), 
                TextInput::make('zip_code')
                    ->label('Почтовый индекс')
                    ->required()
                    ->numeric()
                    ->maxLength(255),
                TextInput::make('city')
                    ->label('Город')
                    ->maxLength(255)
                    ->required(),
                Forms\Components\TextInput::make('street')
                    ->label('Улица')
                    ->required()
                    ->maxLength(255),
                TextInput::make('home')
                    ->label('Номер дома')
                    ->maxLength(255)
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('street')
            ->columns([
                TextColumn::make('fullname')
                    ->label('Имя'),
                TextColumn::make('phone')
                    ->label('Номер телефона')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('city')
                    ->label('Город'),
                TextColumn::make('street')
                    ->label('Улица'),
                TextColumn::make('home')
                    ->label('Номер дома'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
