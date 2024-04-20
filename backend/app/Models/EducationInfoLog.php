<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationInfoLog extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_reg_education_details_log';
    protected $primaryKey = 'registration_no';

    protected $fillable = [
        'registration_no', 
        'admn_based_on',
        'department',
        'other_rank',
        'abc_id'
    ];
}
