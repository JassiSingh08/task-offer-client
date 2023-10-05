import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User1 from "./Pages/User1"
import User2 from "./Pages/User2"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="user1" element={<User1 />} />
      <Route path="user2" element={<User2 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
