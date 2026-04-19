function ToolDistribution({ total, enabled }) {
  const percent = total === 0 ? 0 : Math.round((enabled / total) * 100);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-medium text-gray-600 mb-3">
        Tool Distribution
      </h3>

      {/* BAR */}
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* LABELS */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Enabled: {enabled}</span>
        <span>{percent}%</span>
      </div>
    </div>
  );
}

export default ToolDistribution;