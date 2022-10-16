import styled from "styled-components";

export const Loader = styled.div`
  border-top: 10px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
