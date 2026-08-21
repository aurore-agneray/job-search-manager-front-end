import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import AddOrUpdateApplication from "./pages/AddOrUpdateApplication/index.tsx";
import DisplayApplication from "./pages/DisplayApplication/index.tsx";
import NotFoundPage from "./pages/NotFoundPage/index.tsx";
import { RoutePathEnum } from "./enums.tsx";

/**
 * Routes component
 * @returns All the routes of the application
 */
export default function Routes() {
    return (
        <ReactRoutes>
            <Route
                path={RoutePathEnum.Home}
                element={<Home />}
            />
            <Route
                path={RoutePathEnum.AddNewApplication}
                element={<AddOrUpdateApplication />}
            />
            <Route
                path={RoutePathEnum.DisplayApplication + "/:id"}
                element={<DisplayApplication />}
            />
            <Route
                path={RoutePathEnum.EditApplication + "/:id"}
                element={<AddOrUpdateApplication />}
            />
            <Route
                path="*"
                element={<NotFoundPage />}
            />
        </ReactRoutes>
    );
}
