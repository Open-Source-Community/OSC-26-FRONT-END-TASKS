import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
function StudentCard({name,age,grade,phone}){
    return(
        <div className={`card ${grade>=50?'passed':'failed'}`}>
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <p>Grade:{grade}</p>
            <p>Status:{grade>=50?'passed':'failed'}</p>
            <p>Phone:{phone}</p>

        </div>
    );
}
export default StudentCard ;
StudentCard.propTypes={
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    grade: PropTypes.number.isRequired

};