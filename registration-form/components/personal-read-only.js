import styles from "../../../../styles/Home.module.css";

import { useEffect, useState } from "react";
import axios from "../lib/axios";

import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import 'dayjs/locale/en-gb';
import dayjs from 'dayjs';
import moment from 'moment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

export default function PersonalReadOnly() {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [personal_details, setPersonalDetails] = useState({});
  
  const fetchData = async () => {
    const response = await axios.get(`/api/PersonalInfo/1`);
    setPersonalDetails({...response.data});
  }

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form className={`${styles.formBody}`} onSubmit={(e)=>{e.preventDefault()}}>
              <div className={`${styles.formHeader}`}>
                <h2>Personal Details</h2>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='registration_no' 
                    label='Registration Number' 
                    className={`${styles.input}`} 
                    value={personal_details.registration_no}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='institute_name' 
                    label='Institute Name' 
                    className={`${styles.input}`}  
                    value={personal_details.institute_name} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='name' 
                    label='Name' 
                    className={`${styles.input}`} 
                    value={personal_details.name} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='email' 
                    label='Email' 
                    className={`${styles.input}`} 
                    value={personal_details.email} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='contact_no' 
                    label='Contact Number' 
                    className={`${styles.input}`} 
                    value={personal_details.contact_no} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock} ${styles.radioContainer}`}>
                  <FormControl className={`${styles.input} ${styles.radioInput} flex-wrap flex-row`}>
                    <FormLabel className={`${styles.radioLabel}`}>Gender:</FormLabel>
                    <RadioGroup 
                      row 
                      id="gender" 
                      name='gender' 
                      aria-label='gender' 
                      value={personal_details.gender}
                      disabled
                    >
                      <FormControlLabel disabled value='Male' control={<Radio />} label='Male' />
                      <FormControlLabel disabled value='Female' control={<Radio />} label='Female' />
                      <FormControlLabel disabled value='Transgender' control={<Radio />} label='Transgender' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='category' 
                    label='Category' 
                    className={`${styles.input}`} 
                    value={personal_details.category} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
              </div>

              <hr/>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='nationality' 
                    label='Nationality' 
                    className={`${styles.input}`} 
                    value={personal_details.nationality}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled' 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <FormControl className={`${styles.input} ${styles.radioInput} flex-wrap flex-row`}>
                    <FormLabel className={`${styles.radioLabel}`}>Divyang:</FormLabel>
                    <RadioGroup 
                      row 
                      id="pwd" 
                      name='pwd' 
                      aria-label='pwd'  
                      value={personal_details.pwd}
                      disabled
                    >
                      <FormControlLabel disabled value='Yes' control={<Radio />} label='Yes' />
                      <FormControlLabel disabled value='No' control={<Radio />} label='No' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='permanent_address' 
                    label='Permanent Address' 
                    className={`${styles.input}`} 
                    value={personal_details.permanent_address} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='street_locality' 
                    label='Street/Locality' 
                    className={`${styles.input}`} 
                    value={personal_details.street_locality} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='city' 
                    label='City' 
                    className={`${styles.input}`} 
                    value={personal_details.city} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='state' 
                    label='State' 
                    className={`${styles.input}`} 
                    value={personal_details.state} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='pincode' 
                    label='Pincode' 
                    className={`${styles.input}`} 
                    value={personal_details.pincode} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='country' 
                    label='Country' 
                    className={`${styles.input}`} 
                    value={personal_details.country} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale='en-gb'>
                    <DatePicker 
                      id='date_of_birth' 
                      label='Date of Birth' 
                      className={`${styles.input}`} 
                      value={dayjs(personal_details.date_of_birth)} 
                      InputLabelProps={{ shrink: true, readOnly:true }}
                      variant='filled'
                      disabled
                      required  
                    />
                  </LocalizationProvider>
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <FormControl className={`${styles.input} ${styles.radioInput} flex-wrap flex-row`}>
                    <FormLabel className={`${styles.radioLabel}`}>Marital Status:</FormLabel>
                    <RadioGroup 
                      row 
                      id="martial_status" 
                      name='martial_status' 
                      aria-label='martial_status' 
                      value={personal_details.martial_status}
                    >
                      <FormControlLabel disabled value='Married' control={<Radio />} label='Married' />
                      <FormControlLabel disabled value='Unmarried' control={<Radio />} label='Unmarried' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                <TextField 
                    id='religion' 
                    label='Religion' 
                    className={`${styles.input}`} 
                    value={personal_details.religion} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='blood_group' 
                    label='Blood Group' 
                    className={`${styles.input}`} 
                    value={personal_details.blood_group} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <FormControl className={`${styles.input} ${styles.radioInput} flex-wrap flex-row`}>
                    <FormLabel className={`${styles.radioLabel}`}>Kashmiri Immigrant:</FormLabel>
                    <RadioGroup 
                      row 
                      id="kashmiri_immigrant" 
                      name='kashmiri_immigrant' 
                      aria-label='kashmiri_immigrant' 
                      value={personal_details.kashmiri_immigrant}
                      InputLabelProps={{ shrink: true, readOnly:true }}
                      variant='filled'
                    >
                      <FormControlLabel disabled value='Yes' control={<Radio />} label='Yes' />
                      <FormControlLabel disabled value='No' control={<Radio />} label='No' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='name_in_hindi' 
                    label='Name (in Hindi) (Enter words, it will be converted into Hindi.)' 
                    className={`${styles.input}`} 
                    value={personal_details.name_in_hindi} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='birth_place' 
                    label='Birth Place' 
                    className={`${styles.input}`} 
                    value={personal_details.birth_place} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='identification_mark' 
                    label='Identification Mark' 
                    className={`${styles.input}`} 
                    value={personal_details.identification_mark} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='hobbies' 
                    label='Hobbies' 
                    className={`${styles.input}`} 
                    value={personal_details.hobbies || ""} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='extra_curriculam_activities' 
                    label='Extra Curricular Activities' 
                    className={`${styles.input}`} 
                    value={personal_details.extra_curriculam_activities || ""} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='other_relevant_info' 
                    label='Other Relevent Info' 
                    className={`${styles.input}`} 
                    value={personal_details.other_relevant_info || ""} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.partHeading}`}>
                  <h2>Parent's Bank Details</h2>
                </div>

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_bank_name' 
                    label="Parent's Bank Name" 
                    className={`${styles.input}`} 
                    value={personal_details.parent_bank_name} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                    />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_account_number' 
                    label="Parent's Account Number" 
                    className={`${styles.input}`} 
                    value={personal_details.parent_account_number} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_bank_ifsc_code' 
                    label="Parent's IFSC Code" 
                    className={`${styles.input}`} 
                    value={personal_details.parent_bank_ifsc_code} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='fav_past_time' 
                    label="Candidate's Favourite Past Time" 
                    className={`${styles.input}`} 
                    value={personal_details.fav_past_time || ""} 
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <FormControl className={`${styles.input} ${styles.radioInput} flex-wrap flex-row`}>
                    <FormLabel className={`${styles.radioLabel}`}>Please Select:</FormLabel>
                    <RadioGroup 
                      row 
                      id="identityType" 
                      name='identityType' 
                      aria-label='identityType' 
                      value={personal_details.identityType || 'Aadhar'} 
                      defaultValue='Aadhar' 
                      disabled
                    >
                      <FormControlLabel disabled value='Aadhar' control={<Radio />} label='Aadhar Number' />
                      <FormControlLabel disabled value='Passport' control={<Radio />} label='Passport Number' />
                    </RadioGroup>
                  </FormControl>
                </div>

                {(personal_details.identityType === 'Passport') 
                  ? ( 
                      <div className={`${styles.formBlock}`}>
                        <TextField id='stu_passport_no' label="Passport Number" className={`${styles.input}`} 
                            value={personal_details.stu_passport_no} 
                            InputLabelProps={{ shrink: true, readOnly:true }}
                            variant='filled' required/>
                      </div>
                    )
                  : ( 
                    <div className={`${styles.formBlock}`}>
                      <TextField id='stu_aadhar_no' label="Aadhar Number" className={`${styles.input}`} 
                        value={personal_details.stu_aadhar_no} 
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled' required/>
                      </div>
                    )
                }

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='migration_certificate' 
                    label="Migration Certificate Number" 
                    className={`${styles.input}`} 
                    value={personal_details.migration_certificate}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled' 
                    required
                  />
                </div>
              </div>
              
              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <label htmlFor="photo" className={`${styles.label}`}>Photo:</label>
                  <input type="text" id='photo' name='photo' className={`${styles.input}`} />
                </div>
                <div className={`${styles.formBlock}`}>
                  <label htmlFor="signature" className={`${styles.label}`}>Signature:</label>
                  <input type="text" id='signature' name='signature' className={`${styles.input}`} />
                </div>
              </div>

            </form>

          </div>
        </div>
      </main>
    </>
  );
}
