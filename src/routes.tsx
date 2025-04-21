import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import AddNewApplication from "./pages/AddNewApplication/index.tsx";
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
        </ReactRoutes>
    );
}
