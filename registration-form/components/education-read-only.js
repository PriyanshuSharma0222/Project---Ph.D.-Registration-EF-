import styles from "../../../../styles/Home.module.css";

import { useState, useEffect } from "react";
import axios from "../lib/axios"

import TextField from '@mui/material/TextField'

import Card from '@mui/material/Card'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';

export default function EducationReadOnly() {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [academic_details, setAcademicDetails] = useState({
    education_details: {},
    prev_education: []
  });

  const fetchData = async () => {
    const response1 = await axios.get('/api/EducationInfo/1');
    const response2 = await axios.get('/api/PrevEducationInfo/1');
    setAcademicDetails({...academic_details, education_details:response1.data, prev_education:response2.data});
  }

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form onSubmit={(event) => {event.preventDefault()}} className={`${styles.formBody}`}>
              <div className={`${styles.formHeader}`}>
                <h2>Education Details</h2>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='admn_based_on' 
                    label='Admission Based On' 
                    className={`${styles.input}`} 
                    value={academic_details.education_details.admn_based_on}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='department' 
                    label='Department' 
                    className={`${styles.input}`} 
                    value={academic_details.education_details.department}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='other_rank' 
                    label='Rank' 
                    className={`${styles.input}`} 
                    value={academic_details.education_details.other_rank}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='abc_id' 
                    label='ABC ID' 
                    className={`${styles.input}`} 
                    value={academic_details.education_details.abc_id}
                    InputLabelProps={{ shrink: true, readOnly:true }}
                    variant='filled'
                    required
                  />
                </div>
              </div>

              {academic_details.prev_education.map((info, index) => (
                <>
                  <hr/>

                  <div key={index} className={`${styles.formPart}`}>
                    <div className={`${styles.partHeading}`}>
                      <h3>Examination Details {`${index+1}`}</h3>
                    </div>

                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`nameOfExamination_${index}`}
                        name='exam'
                        label='Name of Examination' 
                        className={`${styles.input}`} 
                        value={info.exam}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`university_board_${index}`}
                        name='university_board'
                        label='University/Board' 
                        className={`${styles.input}`} 
                        value={info.university_board}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`year_${index}`}
                        name='year'
                        label='Year' 
                        className={`${styles.input}`} 
                        value={info.year}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`institute_school_${index}`}
                        name='institute'
                        label='Institute/School' 
                        className={`${styles.input}`} 
                        value={info.institute}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`grade_percentage_${index}`}
                        name='grade'
                        label='Grade/Percentage' 
                        className={`${styles.input}`} 
                        value={info.grade}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <label htmlFor="marksheet" className={`${styles.label}`}>Marksheet:</label>
                      <input type="text" id={`marksheet_${index}`} name="marksheet" className={`${styles.input}`} />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`division_${index}`} 
                        name='division'
                        label='Division' 
                        className={`${styles.input}`} 
                        value={info.division}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <label htmlFor="certificate" className={`${styles.label}`}>Certificate:</label>
                      <input type="text" id={`certificate_${index}`} name="certificate" className={`${styles.input}`} />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`majorSubjects_${index}`} 
                        name='specialization'
                        label='Specialization' 
                        className={`${styles.input}`} 
                        value={info.specialization}
                        InputLabelProps={{ shrink: true, readOnly:true }}
                        variant='filled'
                        required
                      />
                    </div>
                  </div>
                </>
              ))}
            </form>

          </div>
        </div>
      </main>
    </>
  );
}
