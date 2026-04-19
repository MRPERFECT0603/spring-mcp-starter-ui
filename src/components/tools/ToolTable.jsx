import ToolRow from "./ToolRow";

const dummyTools = [
  { name: "get_all_products_db", enabled: true },
  { name: "add_products_db", enabled: false },
];

function ToolTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      
      <div className="px-5 py-4 border-b">
        <h3 className="text-md font-semibold text-gray-800">
          Tool Management
        </h3>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr className="text-left text-gray-600">
            <th className="p-4">Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {dummyTools.map((tool) => (
            <ToolRow key={tool.name} tool={tool} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToolTable;