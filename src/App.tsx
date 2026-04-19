import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import ToolsPage from "./pages/ToolsPage";
import ToolExecutionPage from "./pages/ToolExecutionPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/execute" element={<ToolExecutionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;