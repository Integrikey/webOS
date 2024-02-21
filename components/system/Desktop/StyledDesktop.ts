import styled from "styled-components";

type StyledDesktopProps = {
  $height: number;
  $isAttackerMode: boolean;
};

const StyledDesktop = styled.main<StyledDesktopProps>`
  background-size: 200% 100%;
  background-image: ${({ $isAttackerMode }) => ($isAttackerMode ? "linear-gradient(to right, transparent 50%, #ef4444 50%)" : "linear-gradient(to right, transparent 50%, transparent 50%)")};
  animation: ${({ $isAttackerMode }) => ($isAttackerMode ? 'slide-in .8s ease-in forwards' : 'slide-out .8s ease-out')};
  contain: strict;
  inset: 0;
  overscroll-behavior: none;
  position: fixed;
  width: 100vw;
  height: 60vh;

  @media (min-width: 768px) {
    height: ${({ $height }) => ($height ? `${$height}px` : "100%")};
    width: 67vw;
  }
  
  @media (min-width: 1024px) {
    width: 75vw;
  }

  #loading-status {
    background-color: #fff;
    border-radius: 10px;
    display: none;
    font-weight: 600;
    left: 50%;
    padding: 15px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  > canvas {
    background-color: inherit;
    mix-blend-mode: multiply;
    height: ${({ $height }) => ($height ? `${$height}px` : "100%")};
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  @keyframes slide-in {
    100% {
      background-position-x: -100%;
    }
  }
  
  @keyframes slide-out {
    0% {
      background-position-x: 0%;
      background-image: linear-gradient(to right, #ef4444 50%, transparent 50%);
    }
    100%{
      background-position-x: 100%;
      background-image: linear-gradient(to right, #ef4444 50%, transparent 50%);
    }
  }
`;

export default StyledDesktop;
