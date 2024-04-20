import styles from "../../../../styles/Home.module.css";

import { useState,useEffect } from "react";
import axios from "../lib/axios";

import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { isCommonString, isValidEmailFormat, isValidIFSC } from "./validations";
import { isAlphanumeric, isNumeric } from "validator";

export default function Other({handleTabNext, handleTabPrev}) {
  useEffect(() => {
    fetchData();
  }, []);

  const [other_details, setOtherDetails] = useState({
    hostel_details: {
      registration_no: '1', 
      food_habit: '', 
      laptop_details: '', 
      model_no: '', 
      serial_no: ''
    },
    email_details: {
      registration_no: '1',
      emailUsername: '', 
      emailPassword: ''
    }, 
    student_account_details: {
      registration_no: '1',
      bank_name: '', 
      account_no: '', 
      confirm_account_no: '', 
      ifsc_code: ''
    }
  });

  const fetchData = async () => {
    const response1 = await axios.get('/api/HostelInfo/1');
    console.log(response1.status, response1.data);
    const response2 = await axios.get('/api/StudentAccountInfo/1');
    console.log(response2.status, response2.data);
    // const response3 = await axios.get('/api/EmailInfo/1');
    // console.log(response3.status, response3.data);
    if(Object.keys(response1.data).length !== 0 && Object.keys(response2.data).length !== 0) {
      console.log(111);
      setOtherDetails({...other_details, hostel_details:response1.data, student_account_details:response2.data});
    }
    else if(Object.keys(response1.data).length !== 0) {
      console.log(222);
      setOtherDetails({...other_details, hostel_details:response1.data});
    }
    else if(Object.keys(response2.data).length !== 0) {
      console.log(113331);
      setOtherDetails({...other_details, student_account_details:response2.data});
    }
  }

  const postData = async () => {
    console.log(other_details.student_account_details.registration_no);
    const response = await axios.post('/api/postOtherInfo', {data:other_details});
    return (response.status === 200 || response.status === 201);
  }

  const validator = () => {
    if(!other_details.hostel_details.registration_no || !isAlphanumeric(other_details.hostel_details.registration_no.toString())){
      console.log("INVALID REGISTRATION NUMBER");
      return false;
    }
    else if(!other_details.hostel_details.laptop_details || !isCommonString(other_details.hostel_details.laptop_details)){
      console.log("INVALID LAPTOP DETAILS FORMAT");
      return false;
    }
    else if(!other_details.hostel_details.model_no || !isCommonString(other_details.hostel_details.model_no)){
      console.log("INVALID MODEL NUMBER FORMAT");
      return false;
    }
    else if(!other_details.hostel_details.serial_no || !isCommonString(other_details.hostel_details.serial_no)){
      console.log("INVALID SERIAL NUMBER FORMAT");
      return false;
    }
    else if(other_details.email_details.emailUsername && !isValidEmailFormat(other_details.email_details.emailUsername)){
      console.log("INVALID EMAIL USERNAME");
      return false;
    }
    else if(other_details.email_details.emailPassword && !isAlphanumeric(other_details.email_details.emailPassword)){
      console.log("INVALID PASSWORD");
      return false;
    }
    else if(!other_details.student_account_details.bank_name || !isCommonString(other_details.student_account_details.bank_name)){
      console.log("INVALID BANK NAME");
      return false;
    }
    else if(!other_details.student_account_details.ifsc_code || !isValidIFSC(other_details.student_account_details.ifsc_code)){
      console.log("INVALID IFSC CODE");
      return false;
    }
    else if(!other_details.student_account_details.account_no || !isNumeric(other_details.student_account_details.account_no)){
      console.log("INVALID ACCOUNT NUMBER FORMAT");
      return false;
    }
    else if(!other_details.student_account_details.confirm_account_no || !isNumeric(other_details.student_account_details.confirm_account_no)){
      console.log("INVALID CONFIRM ACCOUNT NUMBER");
      return false;
    }
    else if(other_details.student_account_details.confirm_account_no !== other_details.student_account_details.account_no){
      console.log("CONFIRM ACCOUNT NUMBER DOES NOT MATCH");
      return false;
    }
    else {
      return true;
    }
  }
  
  const handlePrev = async () => {
    if(validator()){
      if(postData()) {
        handleTabPrev();
      }
    }
    else{
      console.log("INVALID FORMAT");
    }
  };

  const handleNext = async () => {
    if(validator()){
      if(postData()) {
        handleTabNext();
      }
    }
    else{
      console.log("INVALID FORMAT");
    }
  };

  const handleInputChangeById = (event, key) => {
    const { id, value } = event.target;
    const obj = {...other_details};
    obj[key][id] = value;
    setOtherDetails(Object.assign({}, obj));
    console.log(obj[key]);
  };

  const handleInputChangeByName = (event, key) => {
    const { name, value } = event.target;
    const obj = {...other_details};
    obj[key][name] = value;
    setOtherDetails(Object.assign({}, obj));
  };

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form className={`${styles.formBody}`} onSubmit={(event) => {event.preventDefault()}}>
              <div className={`${styles.formPart}`}>
                <div className={`${styles.partHeading}`}>
                  <h2>Important Information for Hostel</h2>
                </div>

                <div className={`${styles.formBlock}`}>
                  <FormControl fullWidth>
                    <InputLabel id='food_habit'>Food Habit</InputLabel>
                    <Select 
                      label='food_habit' 
                      defaultValue='' 
                      id='food_habit' 
                      name='food_habit' 
                      labelId='food_habit-label' 
                      onChange={(event)=>{handleInputChangeByName(event, 'hostel_details')}} 
                      value={other_details.hostel_details.food_habit} required
                    >
                      <MenuItem value='' disabled>None</MenuItem>
                      <MenuItem value="Veg">Veg</MenuItem>
                      <MenuItem value="Non Veg">Non Veg</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='laptop_details' 
                    label="If Having Laptop (Give Details)"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'hostel_details')}
                    value={other_details.hostel_details.laptop_details}
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='model_no' 
                    label="Model Number"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'hostel_details')}
                    value={other_details.hostel_details.model_no}
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='serial_no' 
                    label="Serial Number"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'hostel_details')}
                    value={other_details.hostel_details.serial_no}
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.partHeading}`}>
                  <h2>Email Registraion</h2>
                  <p>(Your email will be created on IITISM Domain, adm_no@iitism.ac.in)</p>
                  <p>Your default temporary password is shown in the form. All official communication will be sent on this email only.</p>
                </div>

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='emailUsername' 
                    label="Email Username"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'email_details')}
                    value={other_details.email_details.emailUsername}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='emailPassword' 
                    label="Email Password"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'email_details')}
                    value={other_details.email_details.emailPassword} 
                    variant='filled'
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.partHeading}`}>
                  <h2>Student Account Detail</h2>
                </div>

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='bank_name' 
                    label="Bank Name"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'student_account_details')}
                    value={other_details.student_account_details.bank_name}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='ifsc_code' 
                    label="IFSC Code"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'student_account_details')}
                    value={other_details.student_account_details.ifsc_code}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='account_no' 
                    label="Account Number"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'student_account_details')}
                    value={other_details.student_account_details.account_no}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='confirm_account_no' 
                    label="Confirm Account Number"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event, 'student_account_details')}
                    value={other_details.student_account_details.confirm_account_no}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.formFooter}`}>
                <div className={`${styles.formBtn}`}>
                  <Button variant='contained' onClick={handlePrev}>Previous</Button>
                </div>
                
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
