const ppl = [
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

const result = ppl
  .filter(ppl => ppl.salary >= 8000 && ppl.age<30)
  .map(ppl => ({
    ...ppl,
    name: ppl.name.toUpperCase()
  }));

console.table(result);