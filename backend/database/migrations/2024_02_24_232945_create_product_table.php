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
        Schema::create('product', function (Blueprint $table) {
            // $table->id();
            // $table->timestamps();
            $table->id();
            $table->unsignedBigInteger('id_category');
            $table->text('privacy_type');
            $table->string('location');
            $table->string('capacity');
            // $table->unsignedBigInteger('id_category');
            $table->string('amenities');
            $table->string('image');
            $table->string('title');
            $table->string('description');
            $table->integer('price');
            $table->timestamps();
            $table->foreign('id_category')->references('id')->on('category');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
