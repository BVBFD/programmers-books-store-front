import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <LoadingStyle>
      <FaSpinner />
    </LoadingStyle>
  );
};

const LoadingStyle = styled.div`
  padding: 40px 0;
  text-align: center;

  @keyframes rotateSpinner {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 70px;
    height: 70px;
    fill: #ccc;
    animation: rotateSpinner 1s linear infinite;
  }
`;

export default Loading;
