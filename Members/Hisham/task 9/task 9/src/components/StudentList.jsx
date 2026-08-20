import StudentCard from "./StudentCard";
import styles from "./StudentList.module.css";
export default function StudentList({ studentsData }) {
  return (
    <>
      <h2 className={styles.subHeader}>Studnet Details</h2>
      <div className={styles.container}>
        {studentsData.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </>
  );
}
