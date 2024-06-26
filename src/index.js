import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <h1>Weather App</h1>
      <Weather city="New York" />
    </div>
    <p>
      <a
        href="https://github.com/ksjacob2/react-week4hw"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>
      , by Kate Jacob from SheCodes
    </p>
  </StrictMode>
);
