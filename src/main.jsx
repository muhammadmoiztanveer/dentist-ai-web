import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./router.jsx";
// import { store } from "./store/store.js";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </StrictMode>
);
