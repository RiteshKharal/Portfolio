"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <StyledWrapper>
      <label className="toggle">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setTimeout(() => setTheme(isDark ? "light" : "dark"), 100)}
          className="input"
        />
        <div className="icon icon--moon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={32}
            height={32}
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="icon icon--sun">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={32}
            height={32}
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle {
    background-color: transparent; /* fully transparent circle */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
    line-height: 1;
  }

  .toggle:hover {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1); /* optional subtle hover glow */
  }

  .input {
    display: none;
  }

  .icon,
  .icon--moon,
  .icon--sun {
    background-color: transparent; /* remove white behind icons */
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms;
    line-height: 0.1;
  }

  .icon {
    color: #fbbf24; /* sun color */
  }

  .icon--moon {
    color: #1e3a8a; /* moon color */
    transition-delay: 20ms;
  }

  .icon--sun {
    transform: scale(0);
  }

  .input:checked + .icon--moon {
    transform: rotate(360deg) scale(0);
  }

  .input:checked ~ .icon--sun {
    transition-delay: 20ms;
    transform: scale(1) rotate(360deg);
  }
`;
