import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Wrench, Play } from "lucide-react";
import logo from "../../assets/saplogo.png";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Tools", path: "/tools", icon: Wrench },
    { name: "Execute", path: "/execute", icon: Play },
  ];

  return (
    <div className="group bg-white border-r border-gray-200 h-full w-16 hover:w-64 transition-all duration-300 flex flex-col">

      {/* LOGO */}
      <div className="h-12 flex items-center justify-center group-hover:justify-start group-hover:px-3 border-b transition-all duration-300 overflow-hidden">

        {/* ICON - Always visible */}
        <img
          src={logo}
          alt="logo"
          className="w-6 h-6 object-contain flex-shrink-0"
        />

        {/* TEXT (hover only) */}
        <span className="w-0 group-hover:w-auto group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm font-semibold text-gray-800 overflow-hidden">
          MCP Admin
        </span>
      </div>

      {/* MENU */}
      <nav className="mt-2 space-y-1">
        {menu.map((item) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-center group-hover:justify-start h-10 group-hover:px-3 transition-all duration-300 rounded-lg
              ${active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {/* ICON (always visible) */}
              <Icon size={20} className="flex-shrink-0" />

              {/* TEXT (only on hover) */}
              <span className="w-0 group-hover:w-auto group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;