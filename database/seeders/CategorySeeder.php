<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'label' => Str::random(10),
        ])->traductions()->create([
            'langue' => 'fr',
            'traduction' => 'Catégorie 1',
        ]);


    }
}
