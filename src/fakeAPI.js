const animals = [
  { id: "a-1", name: "Archie", age: 3 },
  { id: "a-2", name: "Stellar", age: 12 },
  { id: "a-3", name: "Jaden", age: 23 },
  { id: "a-4", name: "Rio", age: 9 },
  { id: "a-5", name: "Paris", age: 15 },
  { id: "a-6", name: "Rhymie", age: 6 },
  { id: "a-7", name: "Olivia", age: 3 },
  { id: "a-8", name: "Arsenal", age: 17 },
  { id: "a-9", name: "Gia", age: 21 },
  { id: "a-10", name: "Nora", age: 8 },
];

export const getAnimals = () => {
  return animals;
};

export const getAnimalById = (animalId) => {
  return animals.find((animal) => animal.id === animalId);
};
