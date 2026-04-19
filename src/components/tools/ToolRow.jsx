function ToolRow({ tool }) {
  // Format input schema for display
  const formatSchema = (schema) => {
    if (!schema || Object.keys(schema).length === 0) {
      return <span className="text-gray-400 text-xs">No parameters</span>;
    }

    // Show properties if available
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

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4 font-medium text-gray-800">
        <span className="font-mono text-sm">{tool.name}</span>
      </td>

      <td className="text-gray-600 text-sm py-2 pr-4">
        {tool.description || (
          <span className="text-gray-400 italic">No description</span>
        )}
      </td>

      <td className="text-gray-600 py-2 pr-4">
        {formatSchema(tool.inputSchema)}
      </td>
    </tr>
  );
}

export default ToolRow;