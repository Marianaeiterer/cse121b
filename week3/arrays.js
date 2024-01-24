//activity 1 - map

const array = ["one", "two", "three"];

const newArray = array
  .map((element) => {
    return `<li>${element}</li>`;
  })
  .join("");

document.getElementById("myList").innerHTML = newArray;

//activity 2 - Map

function convertGPA(letter) {
  let gpa = 0;
  switch (letter) {
    case "A":
      gpa = 4;
      break;
    case "B":
      gpa = 3;
      break;
    case "C":
      gpa = 2;
      break;
    default:
      gpa = -1;
  }
  return gpa;
}

const array2 = ["A", "B", "A"];

const gpaArray = array2.map(convertGPA);

console.log(gpaArray);

//activity 3 -Reduce
const totalPoints = gpaArray.reduce((total, gpa) => total + gpa);
const gpa = totalPoints / gpaArray.length;
console.log(gpa);

//activity 4 - Filter
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const filteredArray = fruits.filter((element) => element.length < 6);
console.log(filteredArray);

//activity 5 - indexOf
const numberArray = [12, 34, 21, 54];
const luckNumber = 21;
const luckNumberIndex = numberArray.indexOf(luckNumber);
console.log(luckNumberIndex);
