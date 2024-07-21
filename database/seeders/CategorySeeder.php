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
        for ($i = 0; $i < 10; $i++) {
            Category::create([
            'label' => Str::random(10),
            ])->traductions()->create([
                'langue' => ['fr', 'en'][rand(0, 1)],
                'traduction' => Str::random(10),
            ]);
        }


    }
}
