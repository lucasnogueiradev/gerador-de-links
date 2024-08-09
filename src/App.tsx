import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CadastroSignIn from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<CadastroSignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
