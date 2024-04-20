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

export default function OtherReadOnly() {
  useEffect(() => {
    fetchData();
  }, []);

  const [other_details, setOtherDetails] = useState({
    hostel_details: {},
    email_details: {}, 
    student_account_details: {}
  });

  const fetchData = async () => {
    const response1 = await axios.get('/api/HostelInfo/1');
    const response2 = await axios.get('/api/StudentAccountInfo/1');
    setOtherDetails({...other_details, hostel_details:response1.data, student_account_details:response2.data});
  }
  
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
                  <TextField 
                    id='food_habit' 
                    label="Food Habit"
                    className={`${styles.input}`} 
                    value={other_details.hostel_details.food_habit || ""}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='laptop_details' 
                    label="If Having Laptop (Give Details)"
                    className={`${styles.input}`} 
                    value={other_details.hostel_details.laptop_details || ""}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='model_no' 
                    label="Model Number"
                    className={`${styles.input}`} 
                    value={other_details.hostel_details.model_no || ""}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='serial_no' 
                    label="Serial Number"
                    className={`${styles.input}`} 
                    value={other_details.hostel_details.serial_no || ""}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.partHeading}`}>
                  <h2>Email Registraion</h2>
                </div>

                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='emailUsername' 
                    label="Email Username"
                    className={`${styles.input}`} 
                    value={other_details.email_details.emailUsername}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='emailPassword' 
                    label="Email Password"
                    className={`${styles.input}`} 
                    value={other_details.email_details.emailPassword}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
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
                    value={other_details.student_account_details.bank_name}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='ifsc_code' 
                    label="IFSC Code"
                    className={`${styles.input}`} 
                    value={other_details.student_account_details.ifsc_code}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='account_no' 
                    label="Account Number"
                    className={`${styles.input}`} 
                    value={other_details.student_account_details.account_no}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
              </div>
            </form>

          </div>
        </div>
      </main>
    </>
  );
}
