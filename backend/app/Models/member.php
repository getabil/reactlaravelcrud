<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class member extends Model
{
    use HasFactory;
    /*we make those fileds in database column wirrtable*/ 
    protected $fillable = [
        'name', 
        'age', 
        'address'
    ];
}
