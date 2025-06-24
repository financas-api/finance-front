import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import { ToastContainer } from "react-toastify";
import { TransactionProvider } from "./contexts/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TransactionProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} index />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
          
        </Routes>
      </TransactionProvider>
    </BrowserRouter>

    <ToastContainer />
  </StrictMode>
);
