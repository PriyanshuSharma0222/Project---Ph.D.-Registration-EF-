// React Imports
import { useState } from 'react'

// Component Imports
import Personal from './components/personal.js'
import Education from './components/education.js'
import Parents from './components/parent-account.js'
import Other from './components/other.js'
import Preview from './components/form-preview.js'

// MUI Imports
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import Card from '@mui/material/Card'


const Register = () => {
  const categories = ['PERSONAL DETAILS', 'EDUCATION DETAILS', 'PARENTS DETAILS', 'OTHER DETAILS', 'FORM PREVIEW'];
  
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  }

  const handleTabPrev = () => {
    setTabIndex(Math.max(tabIndex-1, 0));
  }

  const handleTabNext = () => {
    setTabIndex(Math.min(tabIndex+1, 4));
  }

  return (
    <TabContext value={categories[tabIndex]}>
      <Card>
        <Card>
          <TabList variant='fullWidth' onChange={handleTabChange} aria-label='Registration-Form-Nav-Bar'>
            {categories.map((category, index) => {
              if(category !== categories[tabIndex]) {
                return (<Tab key={index} disabled value={category} label={category} />)
              }
              else{
                return (<Tab key={index} value={category} label={category} />)
              }
            })}
          </TabList>
        </Card>

        <TabPanel value='PERSONAL DETAILS'>
          <Personal handleTabNext={handleTabNext}/>
        </TabPanel>
        <TabPanel value='EDUCATION DETAILS'>
          <Education handleTabPrev={handleTabPrev} handleTabNext={handleTabNext} />
        </TabPanel>
        <TabPanel value='PARENTS DETAILS'>
          <Parents handleTabPrev={handleTabPrev} handleTabNext={handleTabNext} />
        </TabPanel>
        <TabPanel value='OTHER DETAILS'>
          <Other handleTabPrev={handleTabPrev} handleTabNext={handleTabNext} />
        </TabPanel>
        <TabPanel value='FORM PREVIEW'>
          <Preview handleTabPrev={handleTabPrev} />
        </TabPanel>
      </Card>
    </TabContext>
  );
}

export default Register
