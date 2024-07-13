const animals = [
  { id: "a-1", name: "Hoodie 1" },
  { id: "a-2", name: "Hoodie 2" },
  { id: "a-3", name: "Hoodie 3" },
  { id: "a-4", name: "Sneakers 1" },
  { id: "a-5", name: "Sneakers 2" },
  { id: "a-6", name: "Sneakers 3" },
  { id: "a-7", name: "Sneakers 4" },
  { id: "a-8", name: "Pants 1" },
  { id: "a-9", name: "Pants 2" },
  { id: "a-10", name: "Pants 3" },
];

export const getAnimals = () => {
  return animals;
};

export const getAnimalById = (animalId) => {
  return animals.find((animal) => animal.id === animalId);
};
