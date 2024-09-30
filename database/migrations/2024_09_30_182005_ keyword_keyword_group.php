<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('keyword_keyword_group', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('keyword_group_id')->constrained()->onDelete('cascade');
            $table->foreignId('keyword_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keyword_keyword_group');
    }
};
