import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { PrivateRoute } from "./services/PrivateRoute";

export function MainRoutes({ auth, setAuth }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute auth={auth}>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
    </Routes>
  );
}
