<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Transaction;
use App\User;
use Faker\Generator as Faker;

$factory->define(Transaction::class, function (Faker $faker) {

        $from = User::all()->random()->id;
        $to = User::all()->except($from)->random()->id;

        return [
            'from'=>$from,
            'to' => $to,
            'amount'=>rand(300, 1000)
        ];
});
