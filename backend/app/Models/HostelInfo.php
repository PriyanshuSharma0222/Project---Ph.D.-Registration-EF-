<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HostelInfo extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_registration_hostel_details';
    protected $primaryKey = 'registration_no';

    protected $fillable = [
        'registration_no', 
        'food_habit',
        'laptop_details',
        'model_no',
        'serial_no'
    ];
}
