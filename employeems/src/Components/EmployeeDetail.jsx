import axios from 'axios'
import React,{useEffect ,useState} from 'react'

import { useNavigate, useParams} from 'react-router-dom'

const EmployeeDetail = () => {
  const [employee ,setEmployee] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect ( () => {
    axios.get ('http://localhost:3000/employee/detail/' +id)
    .then(result => {
       setEmployee(result.data[0])
    }
    )
    .catch(err => console.log(err))
  },[])


  const handleLogout = () => {
      axios.get('http://localhost:3000/employee/logout')
      .then(result => {
        if(result.data.Status) { 
          // localStorage.removeItem("valid")
           navigate('/')
        }
       }).catch(err => console.log(err))

    }

  return (
    <div>
      <div  style={{ height: '100px', backgroundColor: 'lightblue' }}className ="p-2 d-flex justify-content-center shadow ">
        <h4  style={{ fontSize:'50px' }}>TCS Employee Management System</h4>
    </div>
    <div  style={{ height: '700px', backgroundColor: '#EBF4F6' }} className ='d-flex justify-content-center flex-column align-items-center mt-5 spacing top-padding' >
      <div className ='d-flex align-items-center flex-column mt-5'>
        <h3>Name : {employee.name}</h3>
        <h3>Email : {employee.email}</h3>
        <h3>Salary : ${employee.salary}</h3>
      </div>
    <div>
      
      <button className = "btn btn-danger me-2" onClick = {handleLogout}>Logout</button>
    </div>
    </div>
    </div>
  )
}

export default EmployeeDetail