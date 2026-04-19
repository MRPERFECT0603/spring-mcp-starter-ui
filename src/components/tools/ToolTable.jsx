import ToolRow from "./ToolRow";
import { useTools } from "../../hooks/useTools";

function ToolTable() {
  const { tools, loading, error } = useTools();

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading tools...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl border border-red-200 shadow-sm p-8">
        <div className="text-center">
          <p className="text-red-600 font-medium mb-2">Failed to load tools</p>
          <p className="text-sm text-gray-600">{error}</p>
          <p className="text-xs text-gray-500 mt-2">
            Make sure the MCP backend server is running on http://localhost:8001/mcp
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b">
        <h3 className="text-md font-semibold text-gray-800">
          Available MCP Tools
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {tools.length} {tools.length === 1 ? "tool" : "tools"} discovered
        </p>
      </div>

      {tools.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          <p>No tools found.</p>
          <p className="text-xs mt-2">
            Add @McpTool annotations to your backend methods.
          </p>
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-600">
              <th className="p-4 font-medium">Tool Name</th>
              <th className="font-medium">Description</th>
              <th className="font-medium">Input Schema</th>
            </tr>
          </thead>

          <tbody>
            {tools.map((tool) => (
              <ToolRow key={tool.name} tool={tool} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ToolTable;