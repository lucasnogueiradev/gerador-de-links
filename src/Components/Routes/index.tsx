import { Route, Routes } from "react-router-dom";
import { GeradorLinks } from "../../pages/GeradorLinks";
import CadastroSignIn from "../../pages/Signin";

export const RoutesR = () => {
  return (
    <Routes>
      <Route path="/gerar-link-whatsapp" element={<CadastroSignIn />} />
    </Routes>
  );
};
