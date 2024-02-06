/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

let templeList = [];

const url =
  "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = temple.templeName;
    const templePic = document.createElement("img");
    templePic.setAttribute("src", temple.imageUrl);
    templePic.setAttribute("alt", temple.location);

    article.appendChild(title);
    article.appendChild(templePic);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(url);

  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */

const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = (temples) => {
  //function sortBy they asked this name in the instructions
  reset();
  const filter = document.getElementById("filtered").value;
  let date = new Date(1950, 0, 1);
  date = date.getFullYear().toString();

  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) =>
          temple.location.toLowerCase().includes("utah")
        )
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter(
          (temple) => !temple.location.toLowerCase().includes("utah")
        )
      );
      break;
    case "older":
      displayTemples(temples.filter((temple) => temple.dedicated < date));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      displayTemples(temples);
  }
};

getTemples();

/* Event Listener */

document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
