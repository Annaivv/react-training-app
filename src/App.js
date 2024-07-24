import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./Components/SharedLayout";
import { Home } from "./Pages/Home";
import { Animals } from "./Pages/AnimalsList";
import { ExercisesList } from "../src/Pages/ExercisesList";
import { AnimalCard } from "./Pages/AnimalCard";
import { ExerciseCard } from "./Pages/ExerciseCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="animals" element={<Animals />} />
        <Route path="animals/:id" element={<AnimalCard />} />
        <Route path="exercises" element={<ExercisesList />} />
        <Route path="exercises/:id" element={<ExerciseCard />} />
      </Route>
    </Routes>
  );
}

export default App;
