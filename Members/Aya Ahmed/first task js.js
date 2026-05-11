const employees = [
  { name: "Ahmed", age: 35, job: "Backend", salary: 8000, workDaysPerWeek: 5 },
  { name: "Ayman", age: "25", job: "Flutter", salary: 6000, workDaysPerWeek: 6 },
  { name: "Mahmoud", age: "30", job: "Frontend", salary: 7000, workDaysPerWeek: 6 },
  { name: "Ola", age: "37", job: "Backend", salary: 10000, workDaysPerWeek: 5 },
  { name: "Maged", age: "23", job: "Backend", salary: 8500, workDaysPerWeek: 6 },
  { name: "Hamdy", age: "28", job: "Frontend", salary: 5000, workDaysPerWeek: 5 },
  { name: "Yasmine", age: 28, job: "Backend", salary: 10000, workDaysPerWeek: 5 },
  { name: "Gamal", age: 26, job: "Flutter", salary: 8000, workDaysPerWeek: 5 },
  { name: "Rashed", age: "33", job: "Backend", salary: 7000, workDaysPerWeek: 5 },
  { name: "Hoda", age: "25", job: "Backend", salary: 10000, workDaysPerWeek: 5 }
];


const convertedEmployees = employees.map(emp => ({
  ...emp,
  age: Number(emp.age)
}));


const filteredEmployees = convertedEmployees.filter(function(emp) {

  return emp.salary >= 8000 && emp.age < 30;

});


const finalResult = filteredEmployees.map(function(emp) {

  return {
    name: emp.name.toUpperCase(),
    age: emp.age,
    job: emp.job,
    salary: emp.salary,
    workDaysPerWeek: emp.workDaysPerWeek
  };

});



console.table(finalResult);