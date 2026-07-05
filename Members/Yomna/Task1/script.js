const employees=[
    {
        name:"Ahmed",
        age:35,
        job:"Backend",
        salary:8000,
        workDaysperWeek:5
    },
    {
    name: "Ayman",
    age: 25,
    job: "Flutter",
    salary: 6000,
    workDaysPerweek: 6
  },
  {
    name: "Mahmoud",
    age: 30,
    job: "Frontend",
    salary: 7000,
    workDaysPerweek: 6
  },
  {
    name: "Ola",
    age: 37,
    job: "Backend",
    salary: 10000,
    workDaysPerweek: 5
  },
  {
    name: "Maged",
    age: 23,
    job: "Backend",
    salary: 8500,
    workDaysPerweek: 6
  },
  {
    name: "Hamdy",
    age: 28,
    job: "Frontend",
    salary: 5000,
    workDaysPerweek: 5
  },
  {
    name: "Yasmine",
    age: 28,
    job: "Backend",
    salary: 10000,
    workDaysPerweek: 5
  },
  {
    name: "Gamal",
    age: 26,
    job: "Flutter",
    salary: 8000,
    workDaysPerweek: 5
  },
  {
    name: "Rashed",
    age: 33,
    job: "Backend",
    salary: 10000,
    workDaysPerweek: 5
  },
  {
    name: "Hoda",
    age: 25,
    job: "Backend",
    salary: 10000,
    workDaysPerweek: 5
  }
]



const res= employees.filter(employee=>employee.salary >=8000 && employee.age<30)
.map(employee=>({...employee,
    name:employee.name.toUpperCase()
}));

console.table(res);
