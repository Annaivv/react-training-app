const exercises = [
  { id: "ex-1", title: "Sit", description: "Sit description" },
  { id: "ex-2", title: "Stand", description: "Stand description" },
  { id: "ex-3", title: "Stop", description: "Stop description" },
  { id: "ex-4", title: "Move", description: "Move description" },
  {
    id: "ex-5",
    title: "Transition stop-walk",
    description: "Transition stop-walk description",
  },
  {
    id: "ex-6",
    title: "Transition walk-trot",
    description: "Transition walk-trot description",
  },
  {
    id: "ex-7",
    title: "Transition trot-canter",
    description: "Transition trot-canter description",
  },
  { id: "ex-8", title: "Leg yield", description: "Leg yield description" },
  { id: "ex-9", title: "Shoulder-in", description: "Shoulder-in description" },
  {
    id: "ex-10",
    title: "Shoulder-fore",
    description: "Shoulder-fore description",
  },
];

export const getExercises = () => {
  return exercises;
};
