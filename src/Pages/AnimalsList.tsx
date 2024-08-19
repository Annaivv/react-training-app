import * as React from "react";
import { Animal } from "../commonTypes";
import { getAnimals } from "../fakeAPI-animals";
import { ItemsList } from "../Components/ItemsList";
import { useOpen } from "../utils/useOpen";
import { AddNewAnimalForm } from "../Components/AddAnimalForm";

export const AnimalsList = () => {
  const { open, setOpen } = useOpen();

  const [animals, setAnimals] = React.useState<Animal[]>(() => {
    const savedAnimals = localStorage.getItem("animals");
    return savedAnimals ? JSON.parse(savedAnimals) : getAnimals();
  });

  const handleAddAnimal = (newAnimal: Animal) => {
    setAnimals((prevAnimals) => {
      const updatedAnimals = [...prevAnimals, newAnimal];
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
      return updatedAnimals;
    });
  };

  const handleRemoveAnimal = (id: string) => {
    setAnimals((prevAnimals) => {
      const updatedAnimals = prevAnimals.filter((animal) => animal.id !== id);
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
      return updatedAnimals;
    });
  };

  return (
    <div>
      <ItemsList<Animal>
        items={animals}
        itemsKey="animals"
        handleRemoveItem={handleRemoveAnimal}
        onAddButtonClick={() => setOpen(true)}
      />
      {open ? (
        <AddNewAnimalForm
          open={open}
          handleCloseForm={() => setOpen(false)}
          handleAddAnimal={handleAddAnimal}
        />
      ) : null}
    </div>
  );
};
