<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrevEducationInfoLog extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_reg_stu_prev_education_log';

    protected $fillable = [
        'registration_no', 
        'exam',
        'university_board',
        'year',
        'institute',
        'grade',
        'division',
        'specialization'
    ];
}
