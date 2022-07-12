import styled from "styled-components";

export const Spinner = styled.div`
  margin: auto;
  border: 12px solid #fff; 
  border-top: 12px solid #4a4a52;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;