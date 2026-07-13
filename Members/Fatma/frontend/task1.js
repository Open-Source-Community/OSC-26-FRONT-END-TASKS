const empolyee=[
  { name: "Ahmed", age: 35,job:'Backend',salary:8000,workDaysPerweek:5 },
  { name: "Ahman", age: '25',job:'Flutter',salary:6000,workDaysPerweek:6 },
  { name: "Mohamoud", age: 30,job:'Frontend',salary:7000,workDaysPerweek:6 },
  { name: "Ola", age: '37',job:'Backend',salary:10000,workDaysPerweek:5 },
  { name: "Maged", age: '23',job:'Backend',salary:8500,workDaysPerweek:6 },
  { name: "Hamdy", age: '28',job:'frontend',salary:5000,workDaysPerweek:5 },
  { name: "Yasmine", age: 28,job:'Backend',salary:10000,workDaysPerweek:5 },
  { name: "Gamal", age: 26,job:'Flutter',salary:8000,workDaysPerweek:5 },
  { name: "Rashed", age: '33',job:'Backend',salary:10000,workDaysPerweek:5 },
  { name: "Hoda", age: '25',job:'Backend',salary:10000,workDaysPerweek:5 }
]
console.table(empolyee)
for(const emp of empolyee)
{
           emp.age=Number(emp.age)
}
const acc=[];
acc.push(empolyee[6]);
acc.push(empolyee[7]);
acc.push(empolyee[9]);
acc.unshift(empolyee[4]);
console.table(acc);
const rej=[]
// ... Spread Operator by search
rej.push(...empolyee.slice(4,5));
rej.push(...empolyee.slice(6,7));
rej.push(...empolyee.slice(7,8));
rej.push(...empolyee.slice(9,10));
console.table(rej)
const em=[];
for(const elem of empolyee)
    {
        if(elem.name==='Maged')
        {
             em.push(elem)
        }
        else if(elem.name==='Yasmine')
        {
             em.push(elem)
        }
        else if(elem.name==='Gamal')
        {
             em.push(elem)
        }
        else if(elem.name==='Hoda')
        {
             em.push(elem)
        }
    }
console.table(em);
//
// const rej=[];
// for(const emp in empolyee)
// {
    
//     if(empolyee.includes("Hoda"))
//         rej.push(empolyee[emp])
// }
// console.table(rej);