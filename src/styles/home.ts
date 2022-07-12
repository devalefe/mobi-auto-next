import styled from "styled-components";

export const ContainerFlex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export const ContainerTextCenter = styled.div`
  text-align: center;
  color: #4a4a52;

  h1,
  h2 {
    margin: 1rem;
  }
`;

export const FormBox = styled.form`
  text-align: initial;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: auto;
  width: 30rem;
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;

  .formInput,
  button {
    margin: 0.5rem auto !important;
  }

  button,
  button:hover {
    background-color: #5c00c3;
  }
`;
