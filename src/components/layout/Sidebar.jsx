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
<div className="h-12 flex items-center justify-center border-b">
  
  {/* ICON CENTERED */}
  <img
    src={logo}
    alt="logo"
    className="w-6 h-6 object-contain"
  />

  {/* TEXT (hover only) */}
  <span className="ml-2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap text-sm font-semibold text-gray-800 absolute left-16">
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
              className={`flex items-center h-10 px-3 transition rounded-lg
              ${
                active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {/* ICON (always visible) */}
              <div className="w-10 flex justify-center">
                <Icon size={20} />
              </div>

              {/* TEXT (only on hover) */}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
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