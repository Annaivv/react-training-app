import * as React from "react";
import { Animal } from "../interfaces/animalInterfaces";
import { getAnimals } from "../fakeAPI-animals";
import { ItemsList } from "../Components/ItemsList";
import { useOpen } from "../utils/useOpen";
import { AddAnimalForm } from "../Components/AddAnimalForm";

export const animalsKey = "animals";

export const AnimalsList = () => {
  const { open, setOpen } = useOpen();

  const [animals, setAnimals] = React.useState<Animal[]>(() => {
    const savedAnimals = localStorage.getItem(animalsKey);
    return savedAnimals ? JSON.parse(savedAnimals) : getAnimals();
  });

  const handleAddAnimal = (newAnimal: Animal) => {
    setAnimals((prevAnimals) => {
      const updatedAnimals = [...prevAnimals, newAnimal];
      localStorage.setItem(animalsKey, JSON.stringify(updatedAnimals));
      return updatedAnimals;
    });
  };

  const handleRemoveAnimal = (id: string) => {
    setAnimals((prevAnimals) => {
      const updatedAnimals = prevAnimals.filter((animal) => animal.id !== id);
      localStorage.setItem(animalsKey, JSON.stringify(updatedAnimals));
      return updatedAnimals;
    });
  };

  return (
    <div>
      <ItemsList<Animal>
        items={animals}
        itemsKey={animalsKey}
        handleRemoveItem={handleRemoveAnimal}
        onAddButtonClick={() => setOpen(true)}
      />
      {open ? (
        <AddAnimalForm
          open={open}
          handleCloseForm={() => setOpen(false)}
          handleAddAnimal={handleAddAnimal}
        />
      ) : null}
    </div>
  );
};
