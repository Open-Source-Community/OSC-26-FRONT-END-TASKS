heroes = [
  { id: 1, name: "Iron Man", power: 100, team: "Avengers" },
  { id: 2, name: "Spider-man", power: 85, team: "Avengers" },
  { id: 3, name: "Batman", power: 90, team: "Justice League" },
  { id: 4, name: "Wonder Woman", power: 95, team: "Justice League" },
  { id: 5, name: "Black Widow", power: 80, team: "Avengers" },
  { id: 6, name: "Superman", power: 100, team: "Justice League" },
  { id: 7, name: "Wolverine", power: 92, team: "X-Men" },
  { id: 8, name: "Thor", power: 98, team: "Avengers" },
  { id: 9, name: "Flash", power: 94, team: "Justice League" },
  { id: 10, name: "Storm", power: 88, team: "X-Men" },
];

const Avengers = heroes.filter((hero) => hero.team === "Avengers");

console.table(Avengers);

// second answer

let newArr = [];

for (i = 0; i < heroes.length; i++) {
  if (heroes[i].team === "Avengers") {
    newArr.push(heroes[i]);
  }
}
console.table(newArr)