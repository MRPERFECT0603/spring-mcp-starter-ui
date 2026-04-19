// MCP JSON-RPC API Client
const MCP_ENDPOINT = "http://localhost:8001/mcp";

let requestId = 1;

// Make JSON-RPC request
const mcpRequest = async (method, params = {}) => {
  const response = await fetch(MCP_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: requestId++,
      method,
      params,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message || "JSON-RPC error");
  }

  return data.result;
};

// MCP Tool Management APIs
export const mcpApi = {
  // Initialize MCP connection
  initialize: async () => {
    return await mcpRequest("initialize", {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: {
        name: "MCP Admin UI",
        version: "1.0.0",
      },
    });
  },

  // List all tools
  listTools: async () => {
    const result = await mcpRequest("tools/list");
    return result.tools || [];
  },

  // Execute a tool
  callTool: async (name, args = {}) => {
    return await mcpRequest("tools/call", {
      name,
      arguments: args,
    });
  },
};

export default mcpApi;