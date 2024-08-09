import { Button, Input } from "@mui/material";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReactWhatsapp from "./lib/ReactWhatsapp";
import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";

export const GeradorLinks = () => {
  const [copyText, setCopyText] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState(false);
  function handleSuccess() {
    toast.success("Copiado!");
  }
  const handleCopyText = (e: any) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(url);
    handleSuccess();
  };
  var url = `https://wa.me/55${number}?text=${message}`;

  return (
    <Container>
      <ToastContainer autoClose={3000} closeOnClick theme="light" />
      <div className="container">
        <h1>Gerador de link para WhatsApp</h1>
        <form name="form_main">
          <div className="input-number">
            <div className="input">
              <label>Número: </label>
              <Input
                type="text"
                name="number"
                id="number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="input-message">
              <label>Mensagem: </label>
              <Input
                type="text"
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="url">
            <input onChange={handleCopyText} className="copy"></input>
            <button type="button" className="button-copy">
              <TbCopy onClick={copyToClipboard} className="icon">
                Copiar
              </TbCopy>
            </button>
          </div>
        </form>
        <Link className="home" to="/">
          <Button variant="contained" className="button-saber">
            Saber mais
          </Button>
        </Link>
      </div>

      <ReactWhatsapp
        number={number}
        message={message}
        element={undefined}
        onClick={undefined}
      >
        Open Whatsapp
      </ReactWhatsapp>
    </Container>
  );
};
