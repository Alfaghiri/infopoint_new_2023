import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Bib from "./Bib";
import Home from "./Home";
import Jobs from "./Jobs";
import News from "./News";
import Shop from "./Shop";
import Events from "./Events";
import Exam from "./Exam";
import Deals from "./Deals";
import Map from "./Map";
import Resturant from "./Resturant";

const App = () => {
  return (
    <div className="bg-dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bib" element={<Bib />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/map" element={<Map />} />
          <Route path="/res" element={<Resturant />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
