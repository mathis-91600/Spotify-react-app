import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Biblio from "./Views/Biblio";
import Liked from "./Views/Liked";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Rechercher" element={<Search /> } />
        <Route path="/Bibliotheque" element={<Biblio /> } />
        <Route path="/TitresLike" element={<Liked /> } />
      </Routes>
    </div>
  );
}



export default App;
