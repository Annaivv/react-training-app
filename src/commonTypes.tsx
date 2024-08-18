interface Item {
  id: string;
  name: string;
}

export interface Animal extends Item {
  age: number;
  description?: string;
}
