import styles from "../../../../styles/Home.module.css";

import { useState, useEffect } from "react";
import axios from "../lib/axios";

import TextField from '@mui/material/TextField'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

export default function ParentsReadOnly() {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [parent_details, setParentDetails] = useState({});

  const fetchData = async () => {
    const response = await axios.get('/api/ParentsInfo/1');
    setParentDetails(response.data);
  }

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
                    value={parent_details.father_name}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mother_name' 
                    label="Mother's Name"
                    className={`${styles.input}`}
                    value={parent_details.mother_name}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='father_occupation' 
                    label="Father's Occupation"
                    className={`${styles.input}`}
                    value={parent_details.father_occupation}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mother_occupation' 
                    label="Mother's Occupation"
                    className={`${styles.input}`}
                    value={parent_details.mother_occupation}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='father_income' 
                    label="Father's Income (Annual)" 
                    className={`${styles.input}`} 
                    value={parent_details.father_income}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mother_income' 
                    label="Mother's Income (Annual)" 
                    className={`${styles.input}`} 
                    value={parent_details.mother_income}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_mobile_no' 
                    label="Parent's Mobile Number (Cannot be changed and also used in Parent Portal)" 
                    className={`${styles.input}`} 
                    value={parent_details.parent_mobile_no}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parent_email_id' 
                    label="Parent's Email Id" 
                    className={`${styles.input}`} 
                    value={parent_details.parent_email_id}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='guardian_name' 
                    label="Guardian's Name" 
                    className={`${styles.input}`} 
                    value={parent_details.guardian_name || ""}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='guardian_relation' 
                    label="Guardian's Relation" 
                    className={`${styles.input}`} 
                    value={parent_details.guardian_relation || ""}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='alternate_mobile_no' 
                    label='Alternate Mobile No' 
                    className={`${styles.input}`} 
                    value={parent_details.alternate_mobile_no}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='alternate_email_id' 
                    label='Alternate Email Id' 
                    className={`${styles.input}`} 
                    value={parent_details.alternate_email_id}
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
