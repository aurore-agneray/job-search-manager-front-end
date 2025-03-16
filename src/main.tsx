import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import "./styles/bootstrap.css";
import "./styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer/index.tsx";
import Home from "./pages/Home/index.tsx";
import AddNewApplication from "./pages/AddNewApplication/index.tsx";
import NotFoundPage from "./pages/NotFoundPage/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/add-new-application"
                        element={<AddNewApplication />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);
