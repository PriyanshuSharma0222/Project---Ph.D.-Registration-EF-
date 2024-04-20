<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrevEducationInfo extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_reg_stu_prev_education';

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
