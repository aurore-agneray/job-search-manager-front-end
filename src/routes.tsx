import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import AddOrUpdateApplication from "./pages/AddOrUpdateApplication/index.tsx";
import DisplayApplication from "./pages/DisplayApplication/index.tsx";
import NotFoundPage from "./pages/NotFoundPage/index.tsx";

/**
 * Routes component
 * @returns All the routes of the application
 */
export default function Routes() {
    return (
        <ReactRoutes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/add-new-application"
                element={<AddOrUpdateApplication />}
            />
            <Route
                path="/display-application/:id"
                element={<DisplayApplication />}
            />
            <Route
                path="/edit-application/:id"
                element={<AddOrUpdateApplication />}
            />
            <Route
                path="*"
                element={<NotFoundPage />}
            />
        </ReactRoutes>
    );
}
