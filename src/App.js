import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User1 from "./Pages/User1";
import User2 from "./Pages/User2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/user-1" />} />
        <Route path="user-1" element={<User1 />} />
        <Route path="user-2" element={<User2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
