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
    const initialAnimals = getAnimals();
    return savedAnimals
      ? [...initialAnimals, ...JSON.parse(savedAnimals)]
      : initialAnimals;
  });

  const handleAddAnimal = (newAnimal: Animal) => {
    setAnimals((prevAnimals) => {
      const updatedAnimals = [...prevAnimals, newAnimal];
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
      return updatedAnimals;
    });
  };

  return (
    <div>
      <ItemsList<Animal>
        items={animals}
        itemsKey="animals"
        setItems={setAnimals}
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
