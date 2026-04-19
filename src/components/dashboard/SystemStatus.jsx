function SystemStatus() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-medium text-gray-600 mb-3">
        System Status
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-gray-700">MCP Server</span>
        <span className="text-green-600 text-sm font-medium">
          ● Running
        </span>
      </div>

      <div className="mt-3 text-xs text-gray-400">
        Last checked: just now
      </div>
    </div>
  );
}

export default SystemStatus;