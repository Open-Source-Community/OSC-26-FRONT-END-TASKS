let programers = [
{name : 'Ahmed' , age : 35 , job : 'Backend', salary : 8000 , WorkDaysPerWeek : 5 },
{name : 'Ayman' , age : '25' , job : 'Flutter', salary : 6000 , WorkDaysPerWeek : 6 },
{name : 'Mahmoud' , age : 30 , job : 'Frontend', salary : 7000 , WorkDaysPerWeek : 6 },
{name : 'Ola' , age : '37' , job : 'Backend', salary : 10000 , WorkDaysPerWeek : 5 },
{name : 'Maged' , age : '23' , job : 'Backend', salary : 8500 , WorkDaysPerWeek : 6 },
{name : 'Hamdy' , age : '28' , job : 'Frontend', salary : 5000 , WorkDaysPerWeek : 5 },
{name : 'Yasmine' , age : 28 , job : 'Backend', salary : 10000 , WorkDaysPerWeek : 5 },
{name : 'Gamal' , age : 26 , job : 'Flutter', salary : 8000 , WorkDaysPerWeek : 5 },
{name : 'Rashed' , age : '33' , job : 'Backend', salary : 10000 , WorkDaysPerWeek : 5 },
{name : 'Hoda' , age : '25' , job : 'Backend', salary : 10000 , WorkDaysPerWeek : 5 }

];

let answer = programers
.filter(prog => prog.age < 30 && prog.salary >= 8000 && (prog.job == 'Backend' || prog.job == 'Flutter' ))
.map(prog => ({
...prog,
name: prog.name.toUpperCase(),
age: Number(prog.age)
}));

console.table(answer);