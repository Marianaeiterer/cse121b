/* W06: Project */

/* Global variables */
const wizardsElement = document.getElementById("wizards");

let charactersList = [];

const url = "https://potterapi-fedeperin.vercel.app/en/characters";

/* async displayCharacters Function */

const displayCharacters = (characters) => {
  characters.forEach((character) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = character.fullName;
    const characterPic = document.createElement("img");
    characterPic.setAttribute("src", character.image);
    characterPic.setAttribute("alt", character.nickname);

    const paragraph = document.createElement("p");
    paragraph.textContent = `House: ${character.hogwartsHouse}`;

    article.appendChild(title);
    article.appendChild(characterPic);
    article.appendChild(paragraph);
    wizardsElement.appendChild(article);
  });
};

/* async getCharacters Function using fetch()*/

const getCharacters = async () => {
  const response = await fetch(url);

  charactersList = await response.json();
  displayCharacters(charactersList);
};

/* reset Function */

const reset = () => {
  wizardsElement.innerHTML = "";
};

/* filterBestTrio Function */

function filterBestTrio(item) {
  if (
    item.nickname == "Harry" ||
    item.nickname == "Hermione" ||
    item.nickname == "Ron"
  ) {
    return true;
  }
  return false;
}

/* filterCharacters Function */

const filterCharacters = (characters) => {
  //function sortBy they asked this name in the instructions
  reset();
  const filter = document.getElementById("filtered").value;

  switch (filter) {
    case "all":
      displayCharacters(characters);
      break;
    case "trio":
      displayCharacters(
        characters.filter((character) => filterBestTrio(character))
      );
      break;
    case "gryffindor":
      displayCharacters(
        characters.filter((character) =>
          character.hogwartsHouse.toLowerCase().includes("gryffindor")
        )
      );
      break;
    case "slytherin":
      displayCharacters(
        characters.filter((character) =>
          character.hogwartsHouse.toLowerCase().includes("slytherin")
        )
      );
      break;
    case "ravenclaw":
      displayCharacters(
        characters.filter((character) =>
          character.hogwartsHouse.toLowerCase().includes("ravenclaw")
        )
      );
      break;
    case "hufflepuff":
      displayCharacters(
        characters.filter((character) =>
          character.hogwartsHouse.toLowerCase().includes("hufflepuff")
        )
      );
      break;
    case "weasleys":
      displayCharacters(
        characters.filter((character) =>
          character.fullName.toLowerCase().includes("weasley")
        )
      );
      break;
    default:
      displayCharacters(characters);
  }
};

/* Event Listener */

document.getElementById("filtered").addEventListener("change", () => {
  filterCharacters(charactersList);
});

getCharacters();
