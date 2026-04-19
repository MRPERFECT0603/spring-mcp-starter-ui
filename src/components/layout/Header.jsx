import { Menu, Bell, User } from "lucide-react";
import { useLocation } from "react-router-dom";

function Header({ collapsed, setCollapsed }) {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/tools") return "Tools";
    if (location.pathname === "/execute") return "Execute Tool";
    return "MCP Control Panel";
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        

        {/* Title */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">
            MCP Control Panel
          </span>
          <span className="text-sm font-semibold text-gray-800">
            {getTitle()}
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 cursor-pointer">
          <User size={18} />
          <span className="text-sm text-gray-700">Admin</span>
        </div>

      </div>
    </div>
  );
}

export default Header;