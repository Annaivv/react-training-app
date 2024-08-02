import { create } from "zustand";
//import { persist, createJSONStorage } from "zustand/middleware";

const animalsInitialList = [
  { id: "a-1", name: "Abbat", age: 3, description: "Abbat description" },
  { id: "a-2", name: "Stellar", age: 12, description: "Stellar description" },
  { id: "a-3", name: "Jaden", age: 23, description: "Jaden description" },
  { id: "a-4", name: "Rio", age: 9, description: "Rio description" },
  { id: "a-5", name: "Paris", age: 15, description: "Paris description" },
  { id: "a-6", name: "Rhymie", age: 6, description: "Rhymie description" },
  { id: "a-7", name: "Olivia", age: 3, description: "Olivia description" },
  { id: "a-8", name: "Arsenal", age: 17, description: "Arsenal description" },
  { id: "a-9", name: "Gia", age: 21, description: "Gia description" },
  { id: "a-10", name: "Nordic", age: 8, description: "Nordic description" },
];

interface IAnimal {
  id: string;
  name: string;
  age: number;
  description?: string;
}

interface AnimalProps {
  animals: IAnimal[];
}

interface AnimalState extends AnimalProps {
  addAnimal: (animal: IAnimal) => void;
  removeAnimal: (id: string) => void;
}

const createAnimalStore = (initProps?: Partial<AnimalProps>) => {
  const DEFAULT_PROPS: AnimalProps = {
    animals: animalsInitialList,
  };

  return create<AnimalState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addAnimal: (animal) =>
      set((state) => ({ animals: [...state.animals, animal] })),
    removeAnimal: (id) =>
      set((state) => ({
        animals: state.animals.filter((animal) => animal.id !== id),
      })),
  }));
};

// export const useBearStore = create(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       addABear: () => set({ bears: get().bears + 1 }),
//     }),
//     {
//       name: "food-storage", // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// );

export const animalStore = createAnimalStore();
