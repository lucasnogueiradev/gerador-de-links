import { Button, FilledInput, InputAdornment } from "@mui/material";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import { useState } from "react";
import { BsLink } from "react-icons/bs";
import { TbCopy } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const URL = "https://wa.me";

const ReactWhatsapp = ({
  number,
  message,

  element,
  onClick,
  ...props
}) => {
  const Element = element;
  const [copyText, setCopyText] = useState("");
  const [copiar, setCopiar] = useState(true);
  number = number.replace(/[^\w\s]/gi, "").replace(/ /g, "");

  let url = `${URL}/${number}`;

  if (message) {
    url += `?text=${encodeURI(message)}`;
  }

  ReactWhatsapp.propTypes = {
    number: PropTypes.string.isRequired,
    message: PropTypes.string,
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };

  ReactWhatsapp.defaultProps = {
    element: "button",
  };
  function handleSuccess() {
    toast.success("Link copiado com sucesso!");
  }
  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  

  const copyToClipboard = () => {
    copy(url);
    setCopiar(false);
    handleSuccess();
    setInterval(() => {
      handleCopy();
    }, 3000);
  };

  function handleCopy() {
    setTimeout(() => {
      setCopiar(true);
    }, 2000);
  }
  return (
    <>
      <ToastContainer autoClose={3000} closeOnClick theme="light" />
      <FilledInput
        id="filled-adornment-weight"
        className="input"
        placeholder="token"
        type="text"
        value={url}
        style={{
          color: "#006ef4eb",
          fontSize: "1.2rem",
          marginBottom: "30px",
          marginTop: "-25px",
        }}
        
        endAdornment={
          <InputAdornment position="end">
            {" "}
            <BsLink
              style={{
                fontSize: "1.3rem",
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
      <Element
        onClick={(e) => {
          window.open(url);

          if (onClick) {
            onClick(e);
          }
        }}
        {...props}
      />

      {copiar ? (
        <Button
          variant="contained"
          onClick={copyToClipboard}
          className="button-entrar"
          style={{
            color: "#2cf0a2",
          }}
        >
          <TbCopy
            className="icon"
            style={{
              marginRight: "10px",
              fontSize: "1.3rem",
              color: "#03d481",
              marginTop: "-1px",
            }}
          />
          Copiar link
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={copyToClipboard}
          className="button-entrar"
          style={{ backgroundColor: "#03d481" }}
        >
          Copiado!
        </Button>
      )}

      {/* <button type="button" className="button-copy">
        <TbCopy onClick={copyToClipboard} className="icon">
          Copiar
        </TbCopy>
      </button> */}
    </>
  );
};

export default ReactWhatsapp;
