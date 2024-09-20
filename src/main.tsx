import { App } from "./components";
import "./global.css";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(<App />);
