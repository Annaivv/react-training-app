import logo from "./logo.svg";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./Components/SharedLayout";

const Home = lazy(() => import("../src/Pages/Home"));
const Animal = lazy(() => import("../src/Pages/AnimalProfile"));
const Exercises = lazy(() => import("../src/Pages/ExercisesList"));
const User = lazy(() => import("../src/Pages/UserProfile"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
    </Routes>
  );
}

export default App;
