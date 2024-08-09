import styled, { keyframes } from "styled-components";
const animate = keyframes`
 0% {
transform: translate(-200px);
opacity: 0;
 }
 50%{
    opacity: 3;
 }
 100%{
    transform: translate(0px);
    opacity: 1;
 }


`;
const animate2 = keyframes`
 0% {
transform: translate(200px);
opacity: 0;
 }
 50%{
    opacity: 3;
 }
 100%{
    transform: translate(0px);
    opacity: 1;
 }


`;
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-height: 100vh;
  display: flex;
  font-family: "Poppins";
  justify-content: center;
  align-items: center;
  background-color: #fff;

  p,
  strong,
  span,
  h3 {
    color: #ffff;
    line-height: 1.7rem;
    text-align: center;
    font-family: "Roboto";
  }
  @media (max-width: 999px) {
    margin: 0;

    height: 97vh;
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    background-color: #fff;
    overflow: hidden;
  }

  .button-site {
    border-radius: 2rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0.7rem 0;
    color: green;
    gap: 0.4rem;
    width: 200px;
    background: #5e17eb;
    padding: 8px 10px;
    color: #fff;
    font-family: "Poppins";
    &:hover {
      transform: scale(1.1);
      color: #fff;
      background: #2cf0a2;
    }
  }
  .text-banner2 {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: "Poppins";
  }
  video {
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100%;
    padding: 0;
    width: 80%;
    margin-left: 10%;
  }
  span {
    position: absolute;
  }
  .img-celular {
    border-radius: 50%;
    /* background-image: radial-gradient(
      circle at 50% 50%,
      #8a9cff 0,
      #486ee5 50%,
      #00439b 100%
    ); */

    justify-items: center;

    float: right;
  }
  .fazer-cadastro {
    padding-bottom: 2rem;
    margin-top: -1rem;
    a {
      color: #486ee5;
      margin-top: -2rem;
    }
    animation: ${animate} 0.5s;
  }
  .login-tela {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: #fff;
    height: 100%;
    border-radius: 10px;
    animation: ${animate} 0.5s;
  }
  .container1 {
    width: 50%;
    align-items: center;
    margin: auto;
    justify-items: center;
    height: 100%;
    background-color: #00b191;
    background-image: linear-gradient(90deg, #00b191 0%, #078b6a 100%);

    box-shadow: 1px 2px 3px #ccc;
    align-items: center;
    z-index: 2;
    justify-content: space-between;
    margin: auto;
    display: flex;
    flex-direction: column;
    animation: ${animate} 0.5s;
  }
  .contaiber1-body {
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;

    animation: ${animate} 0.5s;
    h3 {
    }
  }
  .container2-body {
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .title-signin {
    justify-items: center;
    text-align: center;
    animation: ${animate} 0.5s;

    width: 65%;
    color: #4970f6;
    p {
      color: #fff;
      font-size: 1.1rem;
    }
  }
  .telas-item__inner1 {
    flex: 34%;
    background: url(./manchaazul.png) no-repeat left center;
    align-items: center;
    background-size: contain;
    padding: 4% 4% 4% 4%;
    border-radius: 50%;

    width: 40%;
    align-items: center;
    justify-content: center;
  }
  .container2 {
    width: 50%;
    height: 100%;
    background: #fff;
    align-items: center;
    margin: auto;
    justify-content: center;
    animation: ${animate} 0.5s;
  }

  @media (max-width: 999px) {
    height: 100%;
    overflow-y: hidden;
    width: 100%;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    max-height: 100vh;
    animation: ${animate} 0.5s;
    .container2 {
      width: 100%;
      height: 100%;
      max-height: 100vh;
    }
    .bannner {
      margin-top: 0rem;
      width: 100%;
      margin-bottom: -20px;
      height: 320px;
      position: relative;
      top: 0px;
      font-size: 20px;
      padding: 0;
    }

    .texto {
      font-size: 22px;
      color: #fff610;
    }
    .big-text {
      font-size: 32px;
    }
    .container1 {
      display: none;
      width: 0%;
    }
    .login-tela {
      width: 98%;
      margin: 2px;
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 2rem;
  justify-content: space-between;
  animation: ${animate} 0.5s;

  @media (max-width: 999px) {
    justify-content: space-between;
    animation: ${animate} 0.5s;
    p {
      line-height: 1.3;
      font-size: 10px;
    }
  }
  > h3 {
    color: #6f6f6f;
    margin-left: 0px;
    padding: 5px;
  }
  > h1 {
    color: #cccc;
  }

  > img {
    height: 40px;
    width: 40px;
  }
`;

export const Form = styled.form`
  height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  border-radius: 25px;
  margin: auto;
  align-items: center;
  h1 {
    color: #d3d3d3;
  }
  .button-entrar {
    width: 200px;
    margin-bottom: 15px;
    padding: 0.5rem 1rem;
    text-align: center;

    background: #00439b;
  }
  .input {
    width: 60%;
    border: none;
    padding: -8px;
    gap: 1rem 0;
    margin-bottom: 1rem;
    background: #ffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .conta-cadastro {
    margin-top: 1.3rem;
    p {
      font-family: "Nunito" sans-serif;
    }
  }
  .entrar-buttom {
    width: 100%;
    margin-top: 1.3rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 999px) {
    width: 100%;
    margin: auto;
    margin: 1px;
    height: 97vh;

    .input {
      width: 300px;
      border: none;
      padding: 1px;
      background: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .entrar-buttom {
      width: 300px;
      margin-top: 1.3rem;

      justify-content: space-between;
    }
    .checkbox {
      font-family: "Nunito" sans-serif;
    }
    .conta-cadastro {
      width: 100%;
      width: 300px;
    }
    .container1 {
      display: none;
    }
  }
`;

export const FormTitle = styled.h1`
  color: #cccc;

  animation: ${animate2} 0.5s;
  &:after {
    content: "";
    display: block;
    width: 55px;

    border-bottom: 10px solid #cccc;
  }
`;
