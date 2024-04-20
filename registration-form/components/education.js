import styles from "../../../../styles/Home.module.css";

import { useState, useEffect } from "react";
import axios from "../lib/axios"

import TextField from '@mui/material/TextField'

import Card from '@mui/material/Card'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import { isAlphanumeric, isNumeric } from "validator";
import { isCommonString, isValidABC_ID, isValidAddress, isValidFloatInRange, isValidGrade, isValidInstituteName, isYear } from "./validations";

export default function Education({handleTabNext, handleTabPrev}) {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [academic_details, setAcademicDetails] = useState({
    education_details: {
      registration_no:'1', 
      admn_based_on: '', 
      department: '', 
      other_rank: '', 
      abc_id: ''
    }, 
    prev_education: [{ 
      registration_no:'1',
      exam: '', 
      university_board: '', 
      year: '', 
      institute: '', 
      grade: '', 
      division: '', 
      specialization: '',
      // id: 1
    }]
  });

  const fetchData = async () => {
    const response1 = await axios.get('/api/EducationInfo/1');
    console.log(response1.status, response1.data);
    const response2 = await axios.get('/api/PrevEducationInfo/1');
    console.log(response2.status, response2.data);
    setAcademicDetails({...academic_details, education_details:response1.data, prev_education:response2.data});
  }

  const postData = async () => {
    const response = await axios.post('/api/postEducationInfo', {data:academic_details});
    return (response.status === 200 || response.status === 201);
  }

  const validator = () => {
    if(!academic_details.education_details.registration_no || !isAlphanumeric(academic_details.education_details.registration_no.toString())){
      console.log("INVALID REGISTRATION NUMBER");
      return false;
    }
    else if(!academic_details.education_details.admn_based_on || !isCommonString(academic_details.education_details.admn_based_on)){
      console.log("INVALID ADMISSION BASED ON");
      return false;
    }
    else if(!academic_details.education_details.department || !isCommonString(academic_details.education_details.department)){
      console.log("INVALID DEPARTMENT");
      return false;
    }
    else if(!academic_details.education_details.other_rank || !isNumeric(academic_details.education_details.other_rank)){
      console.log("INVALID RANK");
      return false;
    }
    else if(!academic_details.education_details.abc_id || !isValidABC_ID(academic_details.education_details.abc_id)){
      console.log("INVALID ABC ID");
      return false;
    }
    else {
      let i=0;
      for(i=0; i<academic_details.prev_education.length; i++){
        if(!academic_details.prev_education[i].exam || !isCommonString(academic_details.prev_education[i].exam)){
          console.log("INVALID EXAM NAME ", i+1);
          return false;
        }
        else if(!academic_details.prev_education[i].university_board || !isCommonString(academic_details.prev_education[i].university_board)){
          console.log("INVALID UNIVERSITY/BOARD", i+1);
          return false;
        }
        else if(!academic_details.prev_education[i].year || !isYear(academic_details.prev_education[i].year)){
          console.log("INVALID YEAR", i+1);
          return false;
        }
        else if(!academic_details.prev_education[i].institute || !isValidAddress(academic_details.prev_education[i].institute)){
          console.log("INVALID INSTITUTE/SCHOOL", i+1);
          return false;
        }
        else if(!academic_details.prev_education[i].grade || (!isValidGrade(academic_details.prev_education[i].grade.toString()) && !isValidFloatInRange(academic_details.prev_education[i].grade))){
          console.log("INVALID GRADE", i+1);
          return false;
        }
        else if(!academic_details.prev_education[i].division || !isAlphanumeric(academic_details.prev_education[i].division)){
          console.log("INVALID DIVISION", i+1);
          return false;
        }
        else if(!academic_details.prev_education[i].specialization || !isCommonString(academic_details.prev_education[i].specialization)){
          console.log("INVALID SPECIALIZATION", i+1);
          return false;
        }
      }
      if(i === academic_details.prev_education.length){
        return true;
      }
      else{
        return false;
      }
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

  const handleInputChangeByIdIndex = (index, event) => {
    const { id, value } = event.target;
    const list = [...academic_details.prev_education];
    list[index][id] = value;
    setAcademicDetails({...academic_details, prev_education: list});
  };

  const handleInputChangeByNameIndex = (index, event) => {
    const { name, value } = event.target;
    const list = [...academic_details.prev_education];
    list[index][name] = value;
    setAcademicDetails({...academic_details, prev_education: list});
    console.log(academic_details.prev_education);
  };

  const handleInputChangeById = (event) => {
    const { id, value } = event.target;
    const obj = {...academic_details};
    obj['education_details'][id] = value;
    setAcademicDetails(Object.assign({}, obj));
  };

  const handleInputChangeByName = (event) => {
    const { name, value } = event.target;
    const obj = {...academic_details};
    obj[name] = value;
    setAcademicDetails(Object.assign({}, obj));
  };

  const handleAddFields = () => {
    const list = [...academic_details.prev_education, { 
        registration_no: '1',
        exam: '', 
        university_board: '', 
        year: '', 
        institute: '', 
        grade: '', 
        division: '', 
        specialization: '' 
        // id: academic_details.prev_education.length + 1 
      }
    ];
    setAcademicDetails({...academic_details, prev_education: list});
  };

  const handleRemoveFields = (index) => {
    const list = [...academic_details.prev_education];
    list.splice(index, 1);
    setAcademicDetails({...academic_details, prev_education: list});
  };

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form onSubmit={(event) => {event.preventDefault()}} className={`${styles.formBody}`}>
              <div className={`${styles.formHeader}`}>
                <h2>Education Details</h2>
                <p>Please do not use Autofill.</p>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='admn_based_on' 
                    label='Admission Based On' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={academic_details.education_details.admn_based_on}
                    variant='filled' 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='department' 
                    label='Department' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={academic_details.education_details.department}
                    variant='filled' 
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='other_rank' 
                    label='Rank' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeById(event)}
                    value={academic_details.education_details.other_rank}
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
                    onChange={(event)=>handleInputChangeById(event)}
                    value={academic_details.education_details.abc_id}
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
                        onChange={(e)=>handleInputChangeByNameIndex(index, e)}
                        value={info.exam}
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`university_board_${index}`}
                        name='university_board'
                        label='University/Board' 
                        className={`${styles.input}`} 
                        onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                        value={info.university_board}
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`year_${index}`}
                        name='year'
                        label='Year' 
                        className={`${styles.input}`} 
                        onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                        value={info.year}
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`institute_school_${index}`}
                        name='institute'
                        label='Institute/School' 
                        className={`${styles.input}`} 
                        onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                        value={info.institute}
                        required
                      />
                    </div>
                    <div className={`${styles.formBlock}`}>
                      <TextField 
                        id={`grade_percentage_${index}`}
                        name='grade'
                        label='Grade/Percentage' 
                        className={`${styles.input}`} 
                        onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                        value={info.grade}
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
                        onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                        value={info.division}
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
                        onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                        value={info.specialization}
                        required
                      />
                    </div>

                    {index>0 && (
                      <div className={`${styles.delAcadContainer}`}>
                        <Button variant='contained' color='error' onClick={() => handleRemoveFields(index)}>Remove</Button>
                      </div>
                      )
                    }
                  </div>
                </>
              ))}

              <div className={`${styles.addAcadContainer}`}>
                <Fab color='success' variant='extended' onClick={handleAddFields}>
                  <AddIcon />
                  Add Academic
                </Fab>
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
