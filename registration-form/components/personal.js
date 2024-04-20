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

import { isAlphabet, isCommonString, isValidAddress, isValidBloodGroup, isValidEmailFormat, isValidIFSC, isValidInstituteName, isValidPhoneNumber, isValidPincode } from './validations';

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { isAlphanumeric, isNumeric } from "validator";

export default function Personal({handleTabNext}) {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [personal_details, setPersonalDetails] = useState({
    registration_no: '1', 
    institute_name: '', 
    name: '', 
    email: '', 
    contact_no: '', 
    gender: '', 
    category: '', 
    nationality: '', 
    pwd: '', 
    permanent_address: '', 
    street_locality: '', 
    city: '', 
    state: '', 
    pincode: '', 
    country: '', 
    date_of_birth: moment().toDate(), 
    martial_status: '', 
    religion: '', 
    blood_group: '', 
    kashmiri_immigrant: '', 
    name_in_hindi: '', 
    birth_place: '', 
    identification_mark: '', 
    hobbies: '', 
    extra_curriculam_activities: '', 
    other_relevant_info: '', 
    parent_bank_name: '', 
    parent_account_number: '', 
    parent_bank_ifsc_code: '', 
    fav_past_time: '', 
    identityType: 'Aadhar', 
    stu_aadhar_no: '', 
    stu_passport_no: '', 
    migration_certificate: ''}
  );
  
  const fetchData = async () => {
    const response = await axios.get(`/api/PersonalInfo/1`);
    console.log(response.status, response.data);
    setPersonalDetails({...response.data});
  }

  const postData = async () => {
    const response = await axios.post('/api/postPersonalInfo', {data:personal_details});
    console.log(response.status, response.data);
    return (response.status === 200 || response.status === 201);
  }

  const validator = () => {
    if(!personal_details.registration_no || !isAlphanumeric(personal_details.registration_no.toString())){
      console.log("INVALID REGISTRATION NUMBER");
      return false;
    }
    else if(!personal_details.institute_name || !isValidInstituteName(personal_details.institute_name)){
      console.log("INVALID INSTITUTE NAME");
      return false;
    }
    else if(!personal_details.contact_no || !isValidPhoneNumber(personal_details.contact_no)){
      console.log("INVALID PHONE NUMBER");
      return false;
    }
    else if(!personal_details.email || !isValidEmailFormat(personal_details.email)){
      console.log("INVALID EMAIL");
      return false;
    }
    else if(!personal_details.name || !isAlphabet(personal_details.name)){
      console.log("INVALID NAME");
      return false;
    }
    else if(!personal_details.category || !isAlphabet(personal_details.category)){
      console.log("INVALID CATEGORY");
      return false;
    }
    else if(!personal_details.nationality || !isAlphabet(personal_details.nationality)){
      console.log("INVALID NATIONALITY");
      return false;
    }
    else if(!personal_details.permanent_address || !isValidAddress(personal_details.permanent_address)){
      console.log("INVALID PERMANENT ADDRESS");
      return false;
    }
    else if(!personal_details.street_locality || !isValidAddress(personal_details.street_locality)){
      console.log("INVALID STREET LOCALITY");
      return false;
    }
    else if(!personal_details.city || !isValidAddress(personal_details.city)){
      console.log("INVALID CITY");
      return false;
    }
    else if(!personal_details.state || !isValidAddress(personal_details.state)){
      console.log("INVALID STATE");
      return false;
    }

    else if(!personal_details.pincode || !isValidPincode(personal_details.pincode)){
      console.log("INVALID PINCODE");
      return false;
    }
    else if(!personal_details.country || !isValidAddress(personal_details.country)){
      console.log("INVALID COUNTRY");
      return false;
    }
    else if(!personal_details.blood_group || !isValidBloodGroup(personal_details.blood_group)){
      console.log("INVALID BLOOD GROUP");
      return false;
    }
    else if(!personal_details.birth_place || !isValidAddress(personal_details.birth_place)){
      console.log("INVALID BIRTH PLACE");
      return false;
    }
    else if(!personal_details.identification_mark || !isCommonString(personal_details.identification_mark)){
      console.log("INVALID IDENTIFICATION MARK");
      return false;
    }
    else if(!isCommonString(personal_details.hobbies)){
      console.log("INVALID HOBBIES");
      return false;
    }
    else if(!isCommonString(personal_details.extra_curriculam_activities)){
      console.log("INVALID EXTRA CURRICULAR ACTIVITIES");
      return false;
    }
    else if(!isCommonString(personal_details.other_relevant_info)){
      console.log("INVALID OTHER RELEVENT INFO");
      return false;
    }
    else if(!personal_details.parent_bank_name || !isCommonString(personal_details.parent_bank_name)){
      console.log("INVALID PARENTS BANK NAME");
      return false;
    }
    else if(!personal_details.parent_account_number || !isNumeric(personal_details.parent_account_number)){
      console.log("INVALID PARNETS ACCOUNT NUMBER");
      return false;
    }
    else if(!personal_details.parent_bank_ifsc_code || !isValidIFSC(personal_details.parent_bank_ifsc_code)){
      console.log("INVALID PARENTS IFSC CODE");
      return false;
    }
    else if(!isCommonString(personal_details.fav_past_time)){
      console.log("INVALID FAVOURITE PAST TIME");
      return false;
    }
    else if(personal_details.stu_aadhar_no && !isAlphanumeric(personal_details.stu_aadhar_no)){
      console.log("INVALID AADHAR");
      return false;
    }
    else if(personal_details.stu_passport_no && !isAlphanumeric(personal_details.stu_passport_no)){
      console.log("INVALID PASSPORT");
      return false;
    }
    else if(!personal_details.migration_certificate || !isAlphanumeric(personal_details.migration_certificate)){
      console.log("INVALID MIGRATION CERTIFICATE");
      return false;
    }
    else{
      return true;
    }
  }

  const handleNext = async () => {
    if(validator()){
      if(postData()) {
        handleTabNext();
      }
      else{
        console.log("POST ERROR");
      }
    }
    else{
      console.log("INVALID FORMAT");
    }
  };
  
  const handleInputChangeById = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    const obj = {...personal_details};
    obj[id] = value;
    setPersonalDetails(Object.assign({}, obj));
  };

  const handleInputChangeByName = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const obj = {...personal_details};
    obj[name] = value;
    setPersonalDetails(Object.assign({}, obj));
  };

  const handleDateChange = (newValue) => {
    const formattedDate = format(newValue.toDate(), 'yyyy-MM-dd');
    setPersonalDetails({...personal_details, date_of_birth: formattedDate});
  }

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form className={`${styles.formBody}`} onSubmit={(e)=>{e.preventDefault()}}>
              <div className={`${styles.formHeader}`}>
                <h2>Personal Details</h2>
                <p>Please do not use Autofill.</p>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='registration_no' 
                    label='Registration Number' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.registration_no}
                    // InputProps={{ readOnly: true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='institute_name' 
                    label='Institute Name' 
                    className={`${styles.input}`}  
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.institute_name} 
                    variant='filled' 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='name' 
                    label='Name' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.name} 
                    variant='filled' 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='email' 
                    label='Email' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.email} 
                    variant='filled' 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='contact_no' 
                    label='Contact Number' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.contact_no} 
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
                      onChange={(e)=>handleInputChangeByName(e)} 
                      value={personal_details.gender}
                    >
                      <FormControlLabel value='Male' control={<Radio />} label='Male' />
                      <FormControlLabel value='Female' control={<Radio />} label='Female' />
                      <FormControlLabel value='Transgender' control={<Radio />} label='Transgender' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='category' 
                    label='Category' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.category} 
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
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.nationality} 
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
                      onChange={(e)=>handleInputChangeByName(e)} 
                      value={personal_details.pwd}
                    >
                      <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                      <FormControlLabel value='No' control={<Radio />} label='No' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='permanent_address' 
                    label='Permanent Address' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.permanent_address} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='street_locality' 
                    label='Street/Locality' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.street_locality} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='city' 
                    label='City' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.city} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='state' 
                    label='State' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.state} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='pincode' 
                    label='Pincode' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.pincode} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='country' 
                    label='Country' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.country} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale='en-gb'>
                    <DatePicker 
                      id='date_of_birth' 
                      label='Date of Birth' 
                      className={`${styles.input}`} 
                      onChange={(e)=>handleDateChange(e)} 
                      value={dayjs(personal_details.date_of_birth)} 
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
                      onChange={(e)=>handleInputChangeByName(e)} 
                      value={personal_details.martial_status}
                    >
                      <FormControlLabel value='Married' control={<Radio />} label='Married' />
                      <FormControlLabel value='Unmarried' control={<Radio />} label='Unmarried' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <FormControl fullWidth>
                    <InputLabel id='religion-label'>Religion</InputLabel>
                    <Select 
                      label='religion' 
                      defaultValue='' 
                      id='religion' 
                      name='religion' 
                      labelId='religion-label' 
                      onChange={(e)=>{handleInputChangeByName(e)}} 
                      value={personal_details.religion} 
                      required
                    >
                      <MenuItem value='' disabled>None</MenuItem>
                      <MenuItem value="Hindu">Hindu</MenuItem>
                      <MenuItem value="Sikh">Sikh</MenuItem>
                      <MenuItem value="Christian">Christian</MenuItem>
                      <MenuItem value="Jain">Jain</MenuItem>
                      <MenuItem value="Muslim">Muslim</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='blood_group' 
                    label='Blood Group' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.blood_group} 
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
                      onChange={(e)=>handleInputChangeByName(e)} 
                      value={personal_details.kashmiri_immigrant}
                    >
                      <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                      <FormControlLabel value='No' control={<Radio />} label='No' />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='name_in_hindi' 
                    label='Name (in Hindi) (Enter words, it will be converted into Hindi.)' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.name_in_hindi} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='birth_place' 
                    label='Birth Place' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.birth_place} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='identification_mark' 
                    label='Identification Mark' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.identification_mark} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='hobbies' 
                    label='Hobbies' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.hobbies} 
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='extra_curriculam_activities' 
                    label='Extra Curricular Activities' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.extra_curriculam_activities} 
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='other_relevant_info' 
                    label='Other Relevent Info' 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.other_relevant_info} 
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.partHeading}`}>
                  <h3>Parent's Bank Details</h3>
                </div>

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_bank_name' 
                    label="Parent's Bank Name" 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.parent_bank_name} 
                    required
                    />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_account_number' 
                    label="Parent's Account Number" 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.parent_account_number} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_bank_ifsc_code' 
                    label="Parent's IFSC Code" 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.parent_bank_ifsc_code} 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='fav_past_time' 
                    label="Candidate's Favourite Past Time" 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.fav_past_time} 
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
                      onChange={(e)=>handleInputChangeByName(e)} 
                    >
                      <FormControlLabel value='Aadhar' control={<Radio />} label='Aadhar Number' />
                      <FormControlLabel value='Passport' control={<Radio />} label='Passport Number' />
                    </RadioGroup>
                  </FormControl>
                </div>

                {(personal_details.identityType === 'Passport') 
                  ? ( 
                      <div className={`${styles.formBlock}`}>
                      <TextField id='stu_passport_no' label="Passport Number" className={`${styles.input}`} 
                          onChange={(e)=>handleInputChangeById(e)}
                          value={personal_details.stu_passport_no} required/>
                      </div>
                    )
                  : ( 
                      <div className={`${styles.formBlock}`}>
                      <TextField id='stu_aadhar_no' label="Aadhar Number" className={`${styles.input}`} 
                          onChange={(e)=>handleInputChangeById(e)}
                          value={personal_details.stu_aadhar_no} required/>
                      </div>
                    )
                }

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='migration_certificate' 
                    label="Migration Certificate Number" 
                    className={`${styles.input}`} 
                    onChange={(e)=>handleInputChangeById(e)}
                    value={personal_details.migration_certificate} 
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

              <div className={`${styles.formFooter}`}>
                <div className={`${styles.formBtn}`}>
                  <Button variant='contained' onClick={handleNext}>Next</Button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </main>
    </>
  );
}
