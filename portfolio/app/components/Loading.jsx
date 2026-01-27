'use client';

import React, { useEffect, useState } from "react";
import styled from "styled-components";

 const MIN_TIME = 500; // In ms

const Loader = () => {
  const [visible, setVisible] = useState(true);
  // eslint-disable-next-line react-hooks/purity
  const startTime = React.useRef(Date.now());

  useEffect(() => {
    const finishLoading = () => {
      const elapsed = Date.now() - startTime.current;
      const remaining = Math.max(MIN_TIME - elapsed, 0);

      setTimeout(() => {
        setVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      finishLoading();
    } else {
      window.addEventListener("DOMContentLoaded", finishLoading);
    }

    return () => {
      window.removeEventListener("DOMContentLoaded", finishLoading);
    };
  }, []);

  return (
    <Overlay className={!visible ? "hide" : ""}>
      <StyledWrapper>
        <div className="dot-spinner">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="dot-spinner__dot" />
          ))}
        </div>
      </StyledWrapper>
    </Overlay>
  );
};

/* ---------- OVERLAY (slower fade) ---------- */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(30px);

  opacity: 1;
  pointer-events: all;

  transition: opacity 0.9s ease;  

  &.hide {
    opacity: 0;
    pointer-events: none;
  }
`;


const StyledWrapper = styled.div`
  .dot-spinner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    --uib-speed: 2s;  

    height: 3rem;
    width: 3rem;
  }

  .dot-spinner__dot::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--color-primary);
    filter: drop-shadow(0 0 12px rgb(95, 150, 202));
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  }

  .dot-spinner__dot {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .dot-spinner__dot:nth-child(2) { transform: rotate(45deg); }
  .dot-spinner__dot:nth-child(3) { transform: rotate(90deg); }
  .dot-spinner__dot:nth-child(4) { transform: rotate(135deg); }
  .dot-spinner__dot:nth-child(5) { transform: rotate(180deg); }
  .dot-spinner__dot:nth-child(6) { transform: rotate(225deg); }
  .dot-spinner__dot:nth-child(7) { transform: rotate(270deg); }
  .dot-spinner__dot:nth-child(8) { transform: rotate(315deg); }

  .dot-spinner__dot:nth-child(2)::before { animation-delay: calc(var(--uib-speed) * -0.875); }
  .dot-spinner__dot:nth-child(3)::before { animation-delay: calc(var(--uib-speed) * -0.75); }
  .dot-spinner__dot:nth-child(4)::before { animation-delay: calc(var(--uib-speed) * -0.625); }
  .dot-spinner__dot:nth-child(5)::before { animation-delay: calc(var(--uib-speed) * -0.5); }
  .dot-spinner__dot:nth-child(6)::before { animation-delay: calc(var(--uib-speed) * -0.375); }
  .dot-spinner__dot:nth-child(7)::before { animation-delay: calc(var(--uib-speed) * -0.25); }
  .dot-spinner__dot:nth-child(8)::before { animation-delay: calc(var(--uib-speed) * -0.125); }

  @keyframes pulse0112 {
    0%, 100% { transform: scale(0); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
  }
`;

export default Loader;
