import ToggleSwitch from "./ToggleSwitch";

function ToolRow({ tool }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4 font-medium text-gray-800">
        {tool.name}
      </td>

      <td className="text-gray-600">
        {tool.enabled ? "Enabled" : "Disabled"}
      </td>

      <td>
        <ToggleSwitch enabled={tool.enabled} />
      </td>
    </tr>
  );
}

export default ToolRow;