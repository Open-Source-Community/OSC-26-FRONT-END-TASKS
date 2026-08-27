import { useState } from 'react'
import StudentCard from'./StudentCard' 
import './App.css'
import StudentList from './StudentList'

function App() {
  const students =[
    { name: "Yomna",age: 21,grade: 85,phone: "01012345678"},
    {name: "Yara",age: 23,grade: 45,phone: "01234567899"},
    {name: "Fatma",age: 23,grade: 90,phone: "0112345678"},
    {name: "Hend",age: 21,grade: 49,phone: "01345678999"}
  ]
  return (
    <>
      <StudentList students={students}/>
    </>
  )
}

export default App
