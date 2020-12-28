<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = ['from', 'to', 'amount'];

    public function user(){
        return $this->belongsTo(User::class, 'from');
    }
}
