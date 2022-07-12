import styled from "styled-components";


export const ContainerFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CResults = styled.div`
  background: #dcf5f2;
  justify-content: center;
  padding: 2.5rem;
  text-align: center;
  font-family: Roboto, sans-serif;
  color: #454b47;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px;

  h1 {
    margin: 1.5rem;
  }

  span {
    background: #0b9f89;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
  }

  p {
    margin: 1.5rem;
    color: #999999;
  }

  a {
    background: #0b9f89;
    padding: 0.3rem 0.5rem;
    color: #fff;
    text-decoration: none;
    border-radius: 0.2rem;
  }
`;
