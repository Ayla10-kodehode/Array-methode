const rootDivContainer = document.getElementById("root");

const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"];

const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"];

const traits = [
  "Vennlig",
  "Energisk",
  "Rolig",
  "Nysgjerrig",
  "Sky",
  "Leken",
  "Intelligent",
  "Trofast",
  "Uavhengig",
  "Sosial",
  "Snill",
  "Beskyttende",
  "Kjærlig",
  "Forsiktig",
  "Eventyrlysten",
  "Stille",
  "Lydig",
  "Utholdende",
  "Modig",
  "Tålmodig",
  "Morsom",
  "Aktiv",
  "Rolig",
  "Selvsikker",
  "Nervøs",
];

let pets = [];

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (1 + max - min)) + min;

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

let createPet = (animal) => {
  let pet = {
    animal: animal,
    color: colors[randomIndex(colors)],
    age: randomNumber(1, 15),
    trait: [],
  };

  const traitCount = randomNumber(1, 4);
  while (pet.trait.length < traitCount) {
    const randomTrait = traits[randomIndex(traits)];
    if (!pet.trait.includes(randomTrait)) {
      pet.trait.push(randomTrait);
    }
  }
  return pet;
};

const arrayLength =
  pets.length === animals.length
    ? console.log("Arrayene har samme lengde")
    : console.log("Arrayene har samme lengde");

const findAnimalByName = pets.find((pet) => pet.animal === "Fugl");
console.log(findAnimalByName);

const findFirstIndexOfColor = pets.findIndex((pet) => pet.color === "Hvit");
console.log(findFirstIndexOfColor);

const findLastIndexOfAge = pets.findLastIndex((pet) => pet.age === 5);
console.log(findLastIndexOfAge);

const findLastAge = pets.findLast((pet) => pet.age === 5);
console.log(findLastAge);

const findTrait = pets.filter((pet) => pet.trait.includes("Rolig"));
console.log(findTrait);

pets = animals.map((animal) => createPet(animal));

const createPetHtml = (object) => {
  const containerEl = document.createElement("div");
  const animalEl = document.createElement("h2");
  animalEl.textContent = object.animal;
  const colorEl = document.createElement("p");
  colorEl.textContent = "color: " + object.color;
  const ageEl = document.createElement("p");
  ageEl.textContent = "age: " + object.age;

  const traitsEl = document.createElement("ul");
  object.trait.forEach((trait) => {
    const traitEl = document.createElement("li");
    traitEl.textContent = trait;

    traitsEl.append(traitEl);
  });

  containerEl.append(animalEl, colorEl, ageEl, traitsEl);

  return containerEl;
};

const petsElements = pets.map((pet) => {
  return createPetHtml(pet);
});

rootDivContainer.append(...petsElements);
