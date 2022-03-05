import {HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { Complains } from "./pages/complains/Complains";
import { Documentacion } from "./pages/documentacion/Documentacion";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="AppBody">
        <HashRouter>
          <Routes>
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/contact-form" element={<Contact />} />
            <Route path="/complains-form" element={<Complains />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
