<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfo extends Model
{
    use HasFactory;
    protected $table = 'adm_phdef_mis_reg_personal_details_temp';
    protected $primaryKey = 'registration_no';

    protected $fillable = [
        'registration_no', 
        'institute_name', 
        'name', 
        'email', 
        'contact_no', 
        'gender', 
        'category', 
        'nationality', 
        'pwd', 
        'permanent_address', 
        'street_locality', 
        'city', 
        'state', 
        'pincode', 
        'country', 
        'date_of_birth', 
        'martial_status', 
        'religion', 
        'blood_group', 
        'kashmiri_immigrant', 
        'name_in_hindi', 
        'birth_place', 
        'identification_mark', 
        'hobbies', 
        'extra_curriculam_activities', 
        'other_relevant_info', 
        'parent_bank_name', 
        'parent_account_number', 
        'parent_bank_ifsc_code', 
        'fav_past_time', 
        'identityType', 
        'stu_aadhar_no', 
        'stu_passport_no', 
        'migration_certificate'
    ];
}
