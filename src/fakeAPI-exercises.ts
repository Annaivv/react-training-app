const exercises = [
  { id: "ex-1", name: "Sit", description: "Sit description" },
  { id: "ex-2", name: "Stand", description: "Stand description" },
  { id: "ex-3", name: "Stop", description: "Stop description" },
  { id: "ex-4", name: "Move", description: "Move description" },
  {
    id: "ex-5",
    name: "Transition stop-walk",
    description: "Transition stop-walk description",
  },
  {
    id: "ex-6",
    name: "Transition walk-trot",
    description: "Transition walk-trot description",
  },
  {
    id: "ex-7",
    name: "Transition trot-canter",
    description: "Transition trot-canter description",
  },
  { id: "ex-8", name: "Leg yield", description: "Leg yield description" },
  { id: "ex-9", name: "Shoulder-in", description: "Shoulder-in description" },
  {
    id: "ex-10",
    name: "Shoulder-fore",
    description: "Shoulder-fore description",
  },
];

export const getExercises = () => {
  return exercises;
};
