import PropTypes from "prop-types";
import styles from "./StudentCard.module.css"

export default function StudentCard({age , name ,grade , phone}) {
  return (
    <>
      <div
        className= {`${styles.studentCard } ${grade >= 50 ? styles.passed : styles.failed}`}
      >
        <h3>student name: {name}</h3>
        <p>age: {age}</p>
        <p>grade: {grade}</p>
        <p>phone: {phone}</p>
      </div>
    </>
  );
}
StudentCard.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.number,
  phone: PropTypes.string,
};
