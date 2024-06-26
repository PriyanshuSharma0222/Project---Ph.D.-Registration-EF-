import Head from "next/head";
import styles from "../../../../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import axios from "../lib/axios";

import Card from '@mui/material/Card'

export default function Home() {
    const router = useRouter();

    const [dataFetched, setDataFetched] = useState(false);
    const [parentsInfo, setParentsInfo] = useState({registrationNo:'1', fathersName: '', mothersName: '', fathersOccupation: '', mothersOccupation: '', fathersAnnualIncome: '', mothersAnnualIncome: '', parentsMobileNo: '', parentsEmailID: '', guardiansName: '', guardiansRelation: '', alternateMobileNo: '', alternateEmailID: ''});

    const handleInputChange = (event) => {
      const { id, value } = event.target;
      const obj = {...parentsInfo};
      obj[id] = value;
      setParentsInfo(Object.assign({}, obj));
      localStorage.setItem('parentsInfo', JSON.stringify(parentsInfo));
      console.log(id, parentsInfo[id]);
    };
  
    const handleInputChangeByName = (event) => {
      const { name, value } = event.target;
      const obj = {...parentsInfo};
      obj[name] = value;
      setParentsInfo(Object.assign({}, obj));
      localStorage.setItem('parentsInfo', JSON.stringify(parentsInfo));
      console.log(name, parentsInfo[name]);
    };

    const getInfo = async () => {
      const response = await axios.get('/api/ParentsInfo/1');
      console.log(response.status, response.data);
      setParentsInfo(response.data);
    }
  
    if(!dataFetched){
      getInfo();
      setDataFetched(true);
    }

    const postInfo = async () => {
      console.log(parentsInfo);
      console.log(localStorage.parentsInfo);
      const response = await axios.post('/api/postParentsInfo', {data:parentsInfo});
      console.log(response.status, response.data);
      return (response.status === 200 || response.status === 201);
    }

    const handlePrev = () => {
      // event.preventDefault();
      // Check if all fields are filled
      // for (const info of parentsInfo) {
      //   if (!info.schoolName || !info.educationLevel || !info.graduationYear) {
      //     setErrorMessage('Please fill out all fields.');
      //     return;
      //   }
      // }
      // Validation passed, store data in localStorage
    //   localStorage.setItem('parentsInfo', parentsInfo);
    //   setErrorMessage('');
    //   // Reset form
    //   setParentsInfo([{ nameOfExamination: '', university_Board: '', year: '', institute_school: '', grade_percentage: '', division: '', majorSubjects: '', id: 1 }]);
    if(postInfo()) {
      router.push('/home/components/education');
    }
    };
  
    const handleNext = async () => {
      // event.preventDefault();
      // Check if all fields are filled
      // for (const info of parentsInfo) {
      //   if (!info.schoolName || !info.educationLevel || !info.graduationYear) {
      //     setErrorMessage('Please fill out all fields.');
      //     return;
      //   }
      // }
      // Validation passed, store data in localStorage
    //   localStorage.setItem('parentsInfo', parentsInfo);
    //   setErrorMessage('');
    //   // Reset form
    //   setParentsInfo([{ nameOfExamination: '', university_Board: '', year: '', institute_school: '', grade_percentage: '', division: '', majorSubjects: '', id: 1 }]);
      // console.log(parentsInfo);
      // console.log(localStorage.parentsInfo);
      // const response = await axios.post('/api/postParentsInfo', {data:parentsInfo});
      // console.log(response.status, response.data);
      if(postInfo()) {
        router.push('/home/components/other');
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
            <form className={`${styles.formBody}`} onSubmit={(event) => {event.preventDefault()}}>
              <div className={`${styles.formHeader}`}>
                <h2>Parent Account Details</h2>
              </div>

              <div className={`${styles.formPart}`}>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='fathersName' 
                    label="Father's Name "
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.fathersName}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mothersName' 
                    label="Mother's Name"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.mothersName}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='fathersOccupation' 
                    label="Father's Occupation"
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.fathersOccupation}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mothersOccupation' 
                    label="Mother's Occupation" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.mothersOccupation}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='fathersAnnualIncome' 
                    label="Father's Income (Annual)" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.fathersAnnualIncome}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='mothersAnnualIncome' 
                    label="Mother's Income (Annual)" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.mothersAnnualIncome}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parentsMobileNo' 
                    label="Parent's Mobile Number (Cannot be changed and also used in Parent Portal)" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.parentsMobileNo}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='parentsEmailID' 
                    label="Parent's Email Id" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.parentsEmailID}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='guardiansName' 
                    label="Guardian's Name" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.guardiansName}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='guardiansRelation' 
                    label="Guardian's Relation" 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.guardiansRelation}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='alternateMobileNo' 
                    label='Alternate Mobile No' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.alternateMobileNo}
                    required
                  />
                </div>
                <div className={`${styles.formBlock}`}>
                  <TextField 
                    id='alternateEmailID' 
                    label='Alternate Email Id' 
                    className={`${styles.input}`} 
                    onChange={(event)=>handleInputChange(event)}
                    value={parentsInfo.alternateEmailID}
                    required
                  />
                </div>
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
