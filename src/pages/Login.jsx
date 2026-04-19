import { useState } from "react";
import { setEndpoint } from "../utils/session";
import { useNavigate } from "react-router-dom";
import logo from "../assets/saplogo.png";

function Login() {
  const [url, setUrl] = useState("http://localhost:8001/mcp");
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleConnect = () => {
    if (!url) return;
    setEndpoint(url);
    navigate("/");
  };

  return (
    <div className="h-screen w-full relative">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

      {/* CARD */}
      <div className="relative h-full flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg w-[360px] px-8 py-8">

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="SAP" className="w-12" />
            <span className="text-lg font-semibold text-gray-800">
              MCP Admin
            </span>
          </div>

          {/* ENDPOINT INPUT */}
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="MCP Endpoint URL"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* LANGUAGE DROPDOWN */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mb-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>English</option>
            <option>German</option>
            <option>French</option>
            <option>Spanish</option>
          </select>

          {/* BUTTON */}
          <button
            onClick={handleConnect}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
          >
            Connect
          </button>

          {/* FOOTER */}
          <p className="text-xs text-gray-400 text-center mt-4">
            Connect to your MCP backend server
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;