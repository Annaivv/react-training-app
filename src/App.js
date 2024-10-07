import { Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { SharedLayout } from "./Components/SharedLayout";
import Home from "./Pages/Home";
import { AnimalsList } from "./Pages/AnimalsList";
import { ExercisesList } from "../src/Pages/ExercisesList";
import { AnimalCard } from "./Pages/AnimalCard";
import { ExerciseCard } from "./Pages/ExerciseCard";
import { queryClient } from "./utils/http";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="animals" element={<AnimalsList />} />
          <Route path="animals/:id" element={<AnimalCard />} />
          <Route path="exercises" element={<ExercisesList />} />
          <Route path="exercises/:id" element={<ExerciseCard />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
