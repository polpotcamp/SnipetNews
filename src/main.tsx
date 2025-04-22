import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorText: "white", 
          colorTextBase: "white", 
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
