import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer/index.tsx";
import Home from "./pages/Home/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <main>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </BrowserRouter>
        </main>
        <Footer />
    </StrictMode>
);
