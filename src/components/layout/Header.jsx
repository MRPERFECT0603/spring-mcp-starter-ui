import { Bell, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/saplogo.png";

function Header({ collapsed, setCollapsed }) {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/tools") return "Tools";
    if (location.pathname === "/execute") return "Execute Tool";
    return "MCP Control Panel";
  };

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">

      {/* LEFT SECTION - Logo + Title */}
      <div className="flex items-center gap-2.5">
        {/* Logo */}
        <img
          src={logo}
          alt="SAP Logo"
          className="w-6 h-6 object-contain flex-shrink-0"
        />

        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-800 leading-none">
            MCP Admin
          </span>
          <span className="text-gray-300 leading-none">|</span>
          <span className="text-sm text-gray-600 leading-none">
            {getTitle()}
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-1.5">

        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell size={18} className="text-gray-600" />
        </button>

        <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
          <User size={18} className="text-gray-600" />
          <span className="text-sm text-gray-700 leading-none">Admin</span>
        </div>

      </div>
    </div>
  );
}

export default Header;