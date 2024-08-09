import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  .container {
    justify-content: center;
    width: 100%;
    align-items: center;
    text-align: center;
  }
  color: #646464;
  width: 100%;

  height: 40vh;
  margin-top: 1rem;
  justify-content: center;
  .input {
    padding: 1rem;
  }
  .input-message {
    input {
      width: 300px;
      padding: 4px 10px;
    }
  }
  .input-number {
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      padding: 4px 10px;
    }
  }
  .copy {
    margin-top: 1rem;
    width: 50%;
    border-radius: 10px;
    color: #fff;
    font-family: "Poppins";
    background: #ff6100;
    padding: 4px 15px;
    border: none;
    font-weight: 500;
  }
  .url {
    font-family: "Poppins", sans-serif;
  }
  .button-copy {
    background: none;
    border: none;
  }
  .button-saber {
    position: absolute;
    font-family: "Poppins", sans-serif;
    right: 23%;
    background: #ff6100;
    top: 32%;
    width: 200px;
    border-radius: 14px;
    :hover {
      background: #ff6130;
    }
  }
  .icon {
    font-size: 2rem;
    margin-top: -5px;
  }

  @media (max-width: 999px) {
    width: 100%;
    max-width: 100%;

    .container {
      margin-bottom: 7rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }
    .input-number {
      display: flex;
      flex-direction: column;
    }
    .input {
      display: flex;
      flex-direction: column;
    }
    .input-message {
      display: flex;
      flex-direction: column;
    }
    .copy {
      width: 100%;
      justify-content: center;
    }
    .url {
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      font-family: "Poppins" sans-serif;
    }
    .button-copy {
      margin-top: 1rem;
    }
    .button-saber {
      top: 55%;
      margin-bottom: 1rem;
    }
    .titulo-bot {
      margin-bottom: 18px;
    }
  }
`;
