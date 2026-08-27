import React from 'react';
import StudentCard from './StudentCard';
function StudentList({ students }) {
  return (
    <>
      <h1>List Of Students:</h1>
      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </>
  );
}

export default StudentList;
