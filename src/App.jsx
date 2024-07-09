import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Watermark />} />{/* Delete the watermark element */}
        </Routes>
      </Router>
    </>
  );
};

///////////// Delete below code after adding your code //////////////

const Watermark = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-3xl text-center">
        This is a boilerplate for React(Vite).
        <br /> Made with ❤️ by{" "}
        <a href="https://piyushis.online" className="underline" target="_blank">
          Piyush
        </a>
      </p>
    </div>
  );
};

export default App;
