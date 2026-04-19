import { getEndpoint } from "../utils/session";

let requestId = 1;

const mcpRequest = async (method, params = {}) => {
  const endpoint = getEndpoint();

  if (!endpoint) {
    throw new Error("No MCP endpoint configured");
  }

  const res = await fetch(endpoint, {
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

  if (!res.ok) throw new Error("Backend not reachable");

  const data = await res.json();

  if (data.error) throw new Error(data.error.message);

  return data.result;
};

const mcpApi = {
  listTools: async () => {
    const result = await mcpRequest("tools/list");
    return result?.tools || [];
  },

  callTool: async (name, args = {}) => {
    return await mcpRequest("tools/call", {
      name,
      arguments: args,
    });
  },

  toggleTool: async (name, enabled) => {
    const endpoint = getEndpoint();

    const res = await fetch(`${endpoint}/tools/toggle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, enabled }),
    });

    if (!res.ok) throw new Error("Toggle failed");

    return await res.text();
  },
};

export default mcpApi;