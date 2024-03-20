import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import axios from "axios";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <h1>Weather App</h1>
      <Weather city="New York" />
    </div>
  </StrictMode>
);
