import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import added
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
