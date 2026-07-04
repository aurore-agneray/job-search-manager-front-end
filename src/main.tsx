import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./styles/bootstrap.css";
import "./styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer/index.tsx";
import { store } from "./store/index.tsx";
import { Provider } from "react-redux";
import Routes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <main>
                    <Routes />
                </main>
                <Footer />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
