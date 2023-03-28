import "./App.css";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
     
    </Routes>
  );
}

export default App;
