import ToggleSwitch from "./ToggleSwitch";
import mcpApi from "../../services/api";
import { useState, useEffect } from "react";

function ToolRow({ tool, refetch }) {
  const [enabled, setEnabled] = useState(tool.enabled);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEnabled(tool.enabled);
  }, [tool.enabled]);

  const formatSchema = (schema) => {
    if (!schema || Object.keys(schema).length === 0) {
      return <span className="text-gray-400 text-xs">No parameters</span>;
    }

    if (schema.properties) {
      const params = Object.keys(schema.properties).join(", ");
      return (
        <span className="text-xs text-gray-600 font-mono">
          {params}
        </span>
      );
    }

    return <span className="text-gray-400 text-xs">Schema defined</span>;
  };

  const handleToggle = async () => {
    try {
      setLoading(true);
      const newState = !enabled;

      setEnabled(newState); // optimistic

      await mcpApi.toggleTool(tool.name, newState);
      await refetch();
    } catch (err) {
      console.error("Toggle failed:", err);
      setEnabled(!enabled);
    } finally {
      setLoading(false);
    }
  };

  return (
    <tr className="hover:bg-gray-50/70 transition">
      
      {/* NAME */}
      <td className="px-6 py-4 font-medium text-gray-800">
        <span className="font-mono text-sm">{tool.name}</span>
      </td>

      {/* DESCRIPTION */}
      <td className="px-6 py-4 text-gray-600 text-sm">
        {tool.description || (
          <span className="text-gray-400 italic">No description</span>
        )}
      </td>

      {/* INPUT SCHEMA */}
      <td className="px-6 py-4 text-gray-500 text-xs">
        {formatSchema(tool.inputSchema)}
      </td>

      {/* STATUS */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          
          <ToggleSwitch
            enabled={enabled}
            onToggle={handleToggle}
            disabled={loading}
          />

          <span
            className={`text-xs font-medium ${
              enabled ? "text-green-600" : "text-gray-400"
            }`}
          >
            {enabled ? "Enabled" : "Disabled"}
          </span>

        </div>
      </td>

    </tr>
  );
}

export default ToolRow;