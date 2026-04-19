import ToolRow from "./ToolRow";
import { useTools } from "../../hooks/useTools";

function ToolTable() {
  const { tools, loading, error, refetch } = useTools();

  if (loading) {
    return (
      <div className="bg-white rounded-xl border p-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading tools...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl border border-red-200 p-8 text-center">
        <p className="text-red-600 font-medium mb-2">
          Failed to load tools
        </p>
        <p className="text-sm text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="px-6 py-5 border-b bg-gray-50/60">
        <h3 className="text-lg font-semibold text-gray-800">
          Available MCP Tools
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {tools.length} {tools.length === 1 ? "tool" : "tools"} discovered
        </p>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm">

        {/* TABLE HEADER */}
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
          <tr className="text-left">
            <th className="px-6 py-3 font-medium">Tool Name</th>
            <th className="px-6 py-3 font-medium">Description</th>
            <th className="px-6 py-3 font-medium">Input Schema</th>
            <th className="px-6 py-3 font-medium">Status</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="divide-y divide-gray-100">
          {tools.map((tool) => (
            <ToolRow
              key={tool.name}
              tool={tool}
              refetch={refetch}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ToolTable;