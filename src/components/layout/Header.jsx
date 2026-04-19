import { Bell, User, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { clearSession } from "../../utils/session";
import logo from "../../assets/saplogo.png";

function Header({ collapsed, setCollapsed }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/tools") return "Tools";
    if (location.pathname === "/execute") return "Execute Tool";
    return "MCP Control Panel";
  };

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  // close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">

      {/* LEFT SECTION - Logo + Title */}
      <div className="flex items-center gap-2.5">
        <img
          src={logo}
          alt="SAP Logo"
          className="w-6 h-6 object-contain flex-shrink-0"
        />

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

        {/* ADMIN DROPDOWN */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 px-2.5 py-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <User size={18} className="text-gray-600" />
            <span className="text-sm text-gray-700 leading-none">Admin</span>
            <ChevronDown size={14} className="text-gray-500" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Header;