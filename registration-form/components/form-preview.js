import styles from "../../../../styles/Home.module.css";

import { useState, useEffect } from "react";
import axios from "../lib/axios";

import PersonalReadOnly from "./personal-read-only";
import ParentsReadOnly from "./parent-account-read-only";
import EducationReadOnly from "./education-read-only";
import OtherReadOnly from "./other-read-only";

import TextField from '@mui/material/TextField'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useRouter } from "next/router";


export default function Preview({handleTabPrev}) {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const router = useRouter();

  // const [personal_details, setPersonalDetails] = useState({});
  // const [academic_details, setAcademicDetails] = useState({});
  // const [parent_details, setParentDetails] = useState({});
  // const [other_details, setOtherDetails] = useState({});

  // const fetchData = async () => {
  //   const response1 = await axios.get(`/api/PersonalInfo/1`);
  //   setPersonalDetails({...response1.data});
  //   const response2 = await axios.get('/api/EducationInfo/1');
  //   const response3 = await axios.get('/api/PrevEducationInfo/1');
  //   setAcademicDetails({...academic_details, education_details:response2.data, prev_education:response3.data});
  //   const response4 = await axios.get('/api/ParentsInfo/1');
  //   setParentDetails(response4.data);
  //   const response5 = await axios.get('/api/HostelInfo/1');
  //   const response6 = await axios.get('/api/StudentAccountInfo/1');
  //   setOtherDetails({...other_details, hostel_details:response5.data, student_account_details:response6.data});
  // }

  const handlePrev = () => {
    handleTabPrev();
  };

  const handleSubmit = () => {
    localStorage.setItem('form_submitted', true);
    router.push('/home');
  };

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.formContainer}`}>

            <form className={`${styles.formBody}`}  onSubmit={(event) => {event.preventDefault()}}>
              <div className={`${styles.formHeader}`}>
                <h2>FORM PREVIEW</h2>
              </div>

              <PersonalReadOnly />
              <ParentsReadOnly />
              <EducationReadOnly />
              <OtherReadOnly />

              <div className={`${styles.formFooter}`}>
                <div className={`${styles.formBtn}`}>
                  <Button variant='contained' onClick={handlePrev}>Previous</Button>
                </div>

                <div className={`${styles.formBtn}`}>
                  <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </main>
    </>
  );
}
