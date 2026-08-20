import React from 'react';
import PropTypes from 'prop-types';
import "./App.css"

function StudentCard ({name, age, grade, phone}){
return (
    <>
    <div className={grade>=50 ? "passed" : "failed"}>
        <h2> Name:{name} </h2>
        <h3> Grade:{grade} </h3>
        <h3> Age:{age} </h3>
        <h3> Phone:{phone} </h3>
        <p>Status: {grade>=50  ? "Passed" : "Failed"}</p>
    </div>
    
    </>
)

}
export default StudentCard;

StudentCard.propTypes = {
name: PropTypes.string.isRequired,
age: PropTypes.number.isRequired,
grade :PropTypes.number.isRequired,
phone: PropTypes.string.isRequired,
};