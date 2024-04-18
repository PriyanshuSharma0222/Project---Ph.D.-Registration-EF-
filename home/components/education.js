import Head from "next/head";
import styles from "../../../../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import axios from "../lib/axios";

import Card from '@mui/material/Card'

export default function Home() {
  const router = useRouter();

  const [dataFetched, setDataFetched] = useState(false);
  const [academicInfo, setAcademicInfo] = useState({registrationNo:'1', admissionBasedOn: '', department: '', rank: '', abcID: '', educationDetails: [{ nameOfExamination: '', university_board: '', year: '', institute_school: '', grade_percentage: '', division: '', majorSubjects: '', id: 1 }]});

  const handleInputChangeIndex = (index, event) => {
    const { id, value } = event.target;
    const list = [...academicInfo.educationDetails];
    list[index][id] = value;
    setAcademicInfo({...academicInfo, educationDetails: list});
    localStorage.setItem('academicInfo', JSON.stringify(academicInfo));
  };

  const handleInputChangeByNameIndex = (index, event) => {
    const { id, name, value } = event.target;
    console.log(id, value);
    const list = [...academicInfo.educationDetails];
    list[index][name] = value;
    setAcademicInfo({...academicInfo, educationDetails: list});
    localStorage.setItem('academicInfo', JSON.stringify(academicInfo));
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const obj = {...academicInfo};
    obj[id] = value;
    setAcademicInfo(Object.assign({}, obj));
    localStorage.setItem('academicInfo', JSON.stringify(academicInfo));
    console.log(id, academicInfo[id]);
  };

  const handleInputChangeByName = (event) => {
    const { name, value } = event.target;
    const obj = {...academicInfo};
    obj[name] = value;
    setAcademicInfo(Object.assign({}, obj));
    localStorage.setItem('academicInfo', JSON.stringify(academicInfo));
    console.log(name, academicInfo[name]);
  };

  const handleAddFields = () => {
    const list = [...academicInfo.educationDetails, { nameOfExamination: '', university_board: '', year: '', institute_school: '', grade_percentage: '', division: '', majorSubjects: '', id: academicInfo.educationDetails.length + 1 }];
    setAcademicInfo({...academicInfo, educationDetails: list});
    localStorage.setItem('academicInfo', JSON.stringify(academicInfo));
  };

  const handleRemoveFields = (index) => {
    const list = [...academicInfo.educationDetails];
    console.log(list);
    list.splice(index, 1);
    console.log(list);
    setAcademicInfo({...academicInfo, educationDetails: list});
    localStorage.setItem('academicInfo', JSON.stringify(academicInfo));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const getInfo = async () => {
    const response = await axios.get('/api/EducationInfo/1');
    console.log(response.status, response.data);
    setAcademicInfo(response.data);
  }

  if(!dataFetched){
    getInfo();
    setDataFetched(true);
  }

  const postInfo = async () => {
    console.log(academicInfo);
    console.log(localStorage.academicInfo);
    const response = await axios.post('/api/postEducationInfo', {data:academicInfo});
    console.log(response.status, response.data);
    return (response.status === 200 || response.status === 201);
  }

  const handlePrev = () => {
    // console.log(academicInfo);
    // localStorage.setItem('academicInfo', JSON.stringify(academicInfo));

    // // Reset form
    // setAcademicInfo({admissionBasedOn: '', department: '', rank: '', abcID: '', educationDetails: [{ nameOfExamination: '', university_board: '', year: '', institute_school: '', grade_percentage: '', division: '', majorSubjects: '', id: 1 }]});
    // router.push('/personal');
    if(postInfo()) {
      router.push('/home/components/personal');
    }
  };

  const handleNext = async () => {
    // console.log(academicInfo);
    // localStorage.setItem('academicInfo', JSON.stringify(academicInfo));

    // // Reset form
    // setAcademicInfo({admissionBasedOn: '', department: '', rank: '', abcID: '', educationDetails: [{ nameOfExamination: '', university_board: '', year: '', institute_school: '', grade_percentage: '', division: '', majorSubjects: '', id: 1 }]});
    // router.push('/parent-account');

    
    // console.log(academicInfo);
    // // console.log(localStorage.academicInfo);
    // // const response = await axios.get('/api/PersonalInfo/1');
    // // setPersonalInfo(response.data);
    // const response = await axios.post('/api/postEducationInfo', {data:academicInfo});
    // console.log(response.status, response.data);

    if(postInfo()) {
      router.push('/home/components/parent-account');
    }
  };


  return (
    <Card>
    <>
      <Head>
        <title>Ph.D Admission (Externally Funded)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formNavBar}`}>

          </div>
          <div className={`${styles.formContainer}`}>
            <form onSubmit={(event) => {event.preventDefault()}} className={`${styles.formBody}`}>
              <div className={`${styles.formHeader}`}>
                <h2>Education Details</h2>
                <p>Please do not use Autofill.</p>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='admissionBasedOn' 
                    label='Admission Based On' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={academicInfo.admissionBasedOn}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='department' 
                    label='Department' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={academicInfo.department}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='rank' 
                    label='Rank' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={academicInfo.rank}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='abcID' 
                    label='ABC ID' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={academicInfo.abcID}
                    required
                  />
                </div>
              </div>

              {academicInfo.educationDetails.map((info, index) => (
                <div key={index} className={`${styles.formPart}`}>
                  <div className={`${styles.partHeading}`}>
                    <h3>Education Details</h3>
                  </div>

                  <div className={`${styles.formBlock}`}>
                  <TextField 
                    id={`nameOfExamination_${index}`}
                    name='nameOfExamination'
                    label='Name of Examination' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                    value={info.nameOfExamination}
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
                    name='institute_school'
                    label='Institute/School' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                    value={info.institute_school}
                    required
                  />
                  </div>
                  <div className={`${styles.formBlock}`}>
                  <TextField 
                    id={`grade_percentage_${index}`}
                    name='grade_percentage'
                    label='Grade/Percentage' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                    value={info.grade_percentage}
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
                    name='majorSubjects'
                    label='Major Subjects' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChangeByNameIndex(index, event)}
                    value={info.majorSubjects}
                    required
                  />
                  </div>
                  {index > 0 && (
                    <div className={`${styles.delAcadContainer}`}>
                      <button onClick={() => handleRemoveFields(index)} className={`${styles.delAcadBtn}`}>Remove</button>
                    </div>
                  )}
                </div>
              ))}

              <div className={`${styles.addAcadContainer}`}>
                <button onClick={handleAddFields} className={`${styles.addAcadBtn}`}>Add Academic</button>
              </div>

              <div className={`${styles.formFooter}`}>
                <button onClick={handlePrev} className={`${styles.formBtn}`}>Previous</button>
                <button onClick={handleNext} className={`${styles.formBtn}`}>Next</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
    </Card>
  );
}
