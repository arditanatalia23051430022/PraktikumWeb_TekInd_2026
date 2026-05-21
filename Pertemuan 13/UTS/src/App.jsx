import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Komponen/Navbar";

import Dashboard from "./Halaman/Dashboard";
import InputPage from "./Halaman/InputPage";
import HistoryPage from "./Halaman/HistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/input" element={<InputPage />} />

          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;