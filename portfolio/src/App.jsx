import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Cv from "./Page/Cv/Cv";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage/>}></Route>
        <Route path="/cv" element={<Cv/>}></Route>
      </Routes>
    </>
  );
}

export default App;
