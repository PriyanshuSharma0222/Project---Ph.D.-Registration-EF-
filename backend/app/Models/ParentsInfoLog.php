<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParentsInfoLog extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_reg_edit_parent_details_log';
    protected $primaryKey = 'registration_no';

    protected $fillable = [
        'registration_no', 
        'father_name',
        'mother_name',
        'father_occupation',
        'mother_occupation',
        'father_income',
        'mother_income',
        'parent_mobile_no',
        'parent_email_id',
        'guardian_name',
        'guardian_relation',
        'alternate_mobile_no',
        'alternate_email_id'
    ];
}
