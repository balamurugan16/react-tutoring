import Searchbar from "./pages/Searchbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/search" element={<Searchbar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
