import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Contact from "./pages/Contact";
import "./app.css";
import Details from "./pages/Details";
import RecipesDetails from "./component/RecipesDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recipes/:Id" element={<Details />} />
    </Routes>
  );
}

export default App;
