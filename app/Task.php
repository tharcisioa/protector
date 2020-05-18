<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name', 'quantity1', 'cidade', 'quantity2', 'tel', 'tipo_inst', 'referencia'];
    public function user(){
        return $this->belongsTo(User::class);
    }
    //
}
