import { InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { BsPhone, BsWhatsapp } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";
import ReactWhatsapp from "../GeradorLinks/lib/ReactWhatsapp";

export function CadastroSignIn() {
  const [login, setLogin] = useState<string>("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <div className="container2">
        <div className="container2-body">
          <Form>
            <Logo>
              <p
                style={{
                  color: "#006ef4eb",
                  fontSize: "2rem",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
                className="logo"
              >
                Gerador de link para WhatsApp
              </p>
            </Logo>
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              type="number"
              placeholder="Digite seu número"
              onChange={(e) => setNumber(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  {" "}
                  <BsPhone
                    style={{
                      alignItems: "center",
                      fontSize: "1.1rem",
                      color: "#0563e7ba",
                    }}
                  />
                </InputAdornment>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            {/* login  */}
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              type="text"
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  {" "}
                  <TbMessageChatbot
                    style={{
                      fontSize: "1.1rem",
                      color: "#0563e7ba",
                    }}
                  />
                </InputAdornment>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              style={{ background: "#ffff" }}
            />

            {/* Senha */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="entrar-buttom"
            >
              <ReactWhatsapp
                number={number}
                message={message}
                element={undefined}
                onClick={undefined}
                style={{ border: "none", background: "none" }}
              >
                <Button variant="contained" className="button-entrar">
                  <IoMdOpen
                    className="icon"
                    style={{
                      marginRight: "10px",
                      marginTop: "-4px",
                      fontSize: "1.2rem",
                    }}
                  />
                  Abrir link
                </Button>
              </ReactWhatsapp>
            </div>
          </Form>
        </div>
      </div>

      <div className="container1">
        <div className="contaiber1-body">
          <h3>
            Bot de atendimento para WhatsApp <BsWhatsapp />
          </h3>
          <figure className="telas-item__inner1">
            <video
              width="100"
              height="390"
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
            >
              <source
                className="video"
                src="restaurante.mp4"
                type="video/mp4"
              />
              <source src="restaurante.mp4" type="video/ogg" />
            </video>
          </figure>
          <div className="title-signin">
            <p>
              Automatize seu atendimento pelo WhatsApp, Instagram ou Facebook,
              deixando que o chatbot tire todas as dúvidas dos seus clientes.
            </p>
            {/* <Link className="home" to="/">
              <Button className="button-site">Saber mais</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CadastroSignIn;
