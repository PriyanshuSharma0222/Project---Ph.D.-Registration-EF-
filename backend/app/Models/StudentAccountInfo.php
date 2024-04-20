<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentAccountInfo extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_reg_student_account_details';
    protected $primaryKey = 'registration_no';

    protected $fillable = [
        'registration_no',
        'bank_name',
        'account_no',
        'ifsc_code'
    ];
}
