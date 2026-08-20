import "./App.css";
import StudentList from "./components/StudentList";

function App() {
  const studentsData = [
    { id: 1, name: "Ahmed", age: 20, grade: 70, phone: "01065636709" },
    { id: 2, name: "Ayman", age: 21, grade: 30, phone: "01065636709" },
    { id: 3, name: "Amr", age: 19, grade: 35, phone: "01065636709" },
    { id: 4, name: "Khaled", age: 19, grade: 80, phone: "01065636709" },
    { id: 5, name: "Rana", age: 20, grade: 40, phone: "01065636709" },
    { id: 6, name: "Rowida", age: 21, grade: 50, phone: "01065636709" },
  ];
  return (
    <>
    <h1>Studnet Dashboard</h1>
      <StudentList studentsData={studentsData} />
    </>
  );
}

export default App;
