<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('traductionables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('traduction_id')->constrained()->onDelete('cascade');
            $table->morphs('traductionable');           
            $table->unique(['traduction_id', 'traductionable_id', 'traductionable_type']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traductionables');
    }
};
