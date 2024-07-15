import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./Components/SharedLayout";
import { Home } from "./Pages/Home";
import { Animals } from "./Pages/AnimalsList";
import { ExercisesList } from "../src/Pages/ExercisesList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="animals" element={<Animals />} />
        <Route path="exercises" element={<ExercisesList />} />
      </Route>
    </Routes>
  );
}

export default App;
