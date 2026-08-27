import React from'react';
import './components/style.css';
import StudentList from './components/StudentList';
function App() {
  const students=[
    { id: '1', name: 'Ahmed', age: 20, grade: 85, phone: '01012345678' },
    { id: '2', name: 'Sara', age: 19, grade: 45, phone: '01198765432' },
    { id: '3', name: 'Mona', age: 20, grade: 50, phone: '01255554444' },
    { id: '4', name: 'Ali', age: 18, grade: 30, phone: '01268090001' }
  ];
  return (
    <div className='home'>
      <h1 className='title'>Student Dashboard</h1>
      <StudentList students={students} />
    </div>
  );
}
export default App;
