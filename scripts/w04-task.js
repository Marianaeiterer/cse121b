/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Mariana Eiterer Overbay",
  photo: "images/profile_picture.jpg",
  favoriteFoods: ["Pizza", "Hamburger", "Lasagna", "Chinese Food", "Sushi"],
  hobbies: ["Reading", "Hiking", "Puzzle"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
  place: "Juiz de Fora, Brazil",
  lenght: "23 years",
});

myProfile.placesLived.push({
  place: "Sao Paulo, Brazil",
  lenght: "2 years",
});

myProfile.placesLived.push({
  place: "Sandy, Utah",
  lenght: "1 year",
});

myProfile.placesLived.push({
  place: "Provo, Utah",
  lenght: "2 years",
});

/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").innerHTML = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo);
document.getElementById("photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let foodItem = document.createElement("li");
  foodItem.textContent = food;
  document.getElementById("favorite-foods").appendChild(foodItem);
});

/* Hobbies List */

myProfile.hobbies.forEach((hobbie) => {
  let hobbieItem = document.createElement("li");
  hobbieItem.textContent = hobbie;
  document.getElementById("hobbies").appendChild(hobbieItem);
});

/* Places Lived DataList */

myProfile.placesLived.map((placeItem) => {
  let place = document.createElement("dt");
  place.textContent = placeItem.place;
  let lenght = document.createElement("dd");
  lenght.textContent = placeItem.lenght;

  document.getElementById("places-lived").appendChild(place);
  document.getElementById("places-lived").appendChild(lenght);
});
