import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">

      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;