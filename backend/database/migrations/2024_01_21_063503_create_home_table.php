<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home', function (Blueprint $table) {
            $table->id();
            $table->string('name', 250);
            $table->string('description');
            $table->unsignedBigInteger('id_category');
            $table->string('image');
            $table->string('file');
            $table->string('location');
            $table->integer('price');
            $table->string('name_host');
            $table->text('map');
            $table->timestamps();
            $table->foreign('id_category')->references('id')->on('category');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home');
    }
};
