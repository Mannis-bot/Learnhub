import React from 'react'
import Sidebar from './Components/Navigation/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Student from './Components/Student/Student'

const App = () => {
  return (
  <Router>
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/students' element={<Student />} />
       </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App