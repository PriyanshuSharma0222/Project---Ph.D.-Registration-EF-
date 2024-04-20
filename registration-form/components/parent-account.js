import styles from "../../../../styles/Home.module.css";

import { useState, useEffect } from "react";
import axios from "../lib/axios";

import TextField from '@mui/material/TextField'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { isAlphabet, isCommonString, isValidEmailFormat, isValidPhoneNumber } from "./validations";
import { isAlphanumeric, isNumeric } from "validator";

export default function Parents({handleTabPrev, handleTabNext}) {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [parent_details, setParentDetails] = useState({
    registration_no: '1', 
    father_name: '', 
    mother_name: '', 
    father_occupation: '', 
    mother_occupation: '', 
    father_income: '', 
    mother_income: '', 
    parent_mobile_no: '', 
    parent_email_id: '', 
    guardian_name: '', 
    guardian_relation: '', 
    alternate_mobile_no: '', 
    alternate_email_id: ''
  });

  const fetchData = async () => {
    const response = await axios.get('/api/ParentsInfo/1');
    console.log(response.data);
    setParentDetails(response.data);
  }

  const postData = async () => {
    const response = await axios.post('/api/postParentsInfo', {data:parent_details});
    return (response.status === 200 || response.status === 201);
  }

  const validator = () => {
    if(!parent_details.registration_no || !isAlphanumeric(parent_details.registration_no.toString())){
      console.log("INVALID REGISTRATION NUMBER");
      return false;
    }
    else if(!parent_details.father_name || !isAlphabet(parent_details.father_name)){
      console.log("INVALID FATHER NAME");
      return false;
    }
    else if(!parent_details.mother_name || !isAlphabet(parent_details.mother_name)){
      console.log("INVALID MOTHER NAME");
      return false;
    }
    else if(!parent_details.father_income || !isNumeric(parent_details.father_income)){
      console.log("INVALID FATHER INCOME");
      return false;
    }
    else if(!parent_details.mother_income || !isNumeric(parent_details.mother_income)){
      console.log("INVALID MOTHER INCOME");
      return false;
    }
    else if(!parent_details.father_occupation || !isCommonString(parent_details.father_occupation)){
      console.log("INVALID FATHER OCCUPATION");
      return false;
    }
    else if(!parent_details.mother_occupation || !isCommonString(parent_details.mother_occupation)){
      console.log("INVALID MOTHER OCCUPATION");
      return false;
    }
    else if(!parent_details.parent_mobile_no || !isValidPhoneNumber(parent_details.parent_mobile_no)){
      console.log("INVALID PARENT MOBILE NUMBER");
      return false;
    }
    else if(!parent_details.parent_email_id || !isValidEmailFormat(parent_details.parent_email_id)){
      console.log("INVALID PARENT EMAIL");
      return false;
    }
    else if(parent_details.guardian_name && !isAlphabet(parent_details.guardian_name)){
      console.log("INVALID GUARDIAN NAME");
      return false;
    }
    else if(parent_details.guardian_relation && !isCommonString(parent_details.guardian_relation)){
      console.log("INVALID GUARDIAN RELATIONSHIP");
      return false;
    }
    else if(!parent_details.alternate_mobile_no || !isValidPhoneNumber(parent_details.alternate_mobile_no)){
      console.log("INVALID ALT MOBILE NO");
      return false;
    }
    else if(!parent_details.alternate_email_id || !isValidEmailFormat(parent_details.alternate_email_id)){
      console.log("INVALID ALT EMAIL");
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

  const handleInputChangeById = (event) => {
    const { id, value } = event.target;
    const obj = {...parent_details};
    obj[id] = value;
    setParentDetails(Object.assign({}, obj));
    console.log(parent_details);
  };
  
  const handleInputChangeByName = (event) => {
    const { name, value } = event.target;
    const obj = {...parent_details};
    obj[name] = value;
    setParentDetails(Object.assign({}, obj));
  };

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form className={`${styles.formBody}`} onSubmit={(event) => {event.preventDefault()}}>
              <div className={`${styles.formHeader}`}>
                <h2>Parent Account Details</h2>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='father_name' 
                    label="Father's Name "
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.father_name}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mother_name' 
                    label="Mother's Name"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.mother_name}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='father_occupation' 
                    label="Father's Occupation"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.father_occupation}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mother_occupation' 
                    label="Mother's Occupation" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.mother_occupation}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='father_income' 
                    label="Father's Income (Annual)" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.father_income}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mother_income' 
                    label="Mother's Income (Annual)" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.mother_income}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_mobile_no' 
                    label="Parent's Mobile Number (Cannot be changed and also used in Parent Portal)" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.parent_mobile_no}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_email_id' 
                    label="Parent's Email Id" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.parent_email_id}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='guardian_name' 
                    label="Guardian's Name" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.guardian_name}
                    
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='guardian_relation' 
                    label="Guardian's Relation" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.guardian_relation}
                    
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='alternate_mobile_no' 
                    label='Alternate Mobile No' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.alternate_mobile_no}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='alternate_email_id' 
                    label='Alternate Email Id' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={parent_details.alternate_email_id}
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
