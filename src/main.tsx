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
import DisplayApplication from "./pages/DisplayApplication/index.tsx";
import NotFoundPage from "./pages/NotFoundPage/index.tsx";
import { store } from "./store/index.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
	        <Provider store={store}>
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
	                        path="/display-application/:id"
	                        element={<DisplayApplication />}
	                    />
	                    <Route
	                        path="*"
	                        element={<NotFoundPage />}
	                    />
	                </Routes>
	            </main>
	            <Footer />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
