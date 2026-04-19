function ActivityFeed({ tools }) {
  // fake activity from tools (for now)
  const activity = tools.map((tool, i) => ({
    name: tool.name,
    status: tool.enabled ? "enabled" : "disabled",
    time: `${i + 1} min ago`,
  }));

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-medium text-gray-600 mb-4">
        Recent Activity
      </h3>

      <div className="space-y-3">
        {activity.slice(0, 5).map((item, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            
            <div className="flex items-center gap-2">
              <span
                className={`text-xs ${
                  item.status === "enabled"
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                ●
              </span>
              <span className="text-gray-700 font-mono">
                {item.name}
              </span>
            </div>

            <span className="text-xs text-gray-400">
              {item.time}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;