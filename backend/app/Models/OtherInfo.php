<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OtherInfo extends Model
{
    use HasFactory;
    protected $table = 'other_info_temp';
    protected $primaryKey = 'registration_no';

    protected $fillable = [
        'registration_no', 
        'emailUsername',
        'emailPassword'
    ];
}
