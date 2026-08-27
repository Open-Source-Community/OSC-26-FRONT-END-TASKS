import React from 'react'; 
import StudentCard from './StudentCard'
import { v4 as uuid } from 'uuid';

function StudentList({students}){

    return (
        <>
         <div>
            <h1>Students Dashboard</h1>
            <h2>List of students</h2>
            {
                students.map((std)=>( 
                    <div style={{margin:25}}>
                        <StudentCard key={uuid()} {...std} />
                   </div>

                ))
            }

         </div>

        
        </>
    )

}
export default StudentList