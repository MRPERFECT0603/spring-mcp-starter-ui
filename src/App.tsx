import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ToolsPage from "./pages/ToolsPage";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import { getEndpoint } from "./utils/session";

function PrivateRoute({ children }) {
  const endpoint = getEndpoint();
  return endpoint ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* PROTECTED ROUTES WITH LAYOUT */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />   {/* 👈 THIS WAS MISSING */}
            </PrivateRoute>
          }
        >
          {/* Nested routes */}
          <Route index element={<Dashboard />} />
          <Route path="tools" element={<ToolsPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;