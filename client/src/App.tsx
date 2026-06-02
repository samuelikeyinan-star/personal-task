import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mytask" element={<MyTask />} />
          <Route path="/mynewtask" element={<NewTask />} />
          <Route path="/edittask" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
