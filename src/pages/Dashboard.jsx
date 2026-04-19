import { useTools } from "../hooks/useTools";
import StatCard from "../components/dashboard/StatCard";
import SystemStatus from "../components/dashboard/SystemStatus";
import ToolDistribution from "../components/dashboard/ToolDistribution";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  const { tools, loading, error } = useTools();

  const total = tools.length;
  const enabled = tools.filter(t => t.enabled).length;
  const disabled = total - enabled;

  if (loading) {
    return <div className="p-8">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-500">Failed to load dashboard</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">

      {/* TITLE */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Tools" value={total} />
        <StatCard title="Enabled Tools" value={enabled} />
        <StatCard title="Disabled Tools" value={disabled} />
      </div>

      {/* STATUS + DISTRIBUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SystemStatus />
        <ToolDistribution total={total} enabled={enabled} />
      </div>

      {/* ACTIVITY */}
      <ActivityFeed tools={tools} />

    </div>
  );
}

export default Dashboard;