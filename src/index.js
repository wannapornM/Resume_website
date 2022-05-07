import { createRoot } from "react-dom/client";
import Main from "./components/main.js";

const main = document.getElementById("main");
const root = createRoot(main);
root.render(<Main />);
