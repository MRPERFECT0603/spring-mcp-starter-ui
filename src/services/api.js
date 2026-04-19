// MCP JSON-RPC API Client (Streaming HTTP Support)
const MCP_ENDPOINT = "http://localhost:8001/mcp";

let requestId = 1;

// Make JSON-RPC request with streaming support
const mcpRequest = async (method, params = {}) => {
  try {
    const response = await fetch(MCP_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: requestId++,
        method,
        params,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");

    // Handle streaming response (SSE or NDJSON)
    if (contentType?.includes("text/event-stream") || contentType?.includes("stream")) {
      const text = await response.text();

      // Parse newline-delimited JSON or SSE format
      const lines = text.trim().split('\n');
      for (const line of lines) {
        if (!line.trim() || line.startsWith(':')) continue;

        // Remove SSE "data: " prefix if present
        const jsonStr = line.startsWith('data: ') ? line.substring(6) : line;

        try {
          const data = JSON.parse(jsonStr);
          if (data.error) {
            throw new Error(data.error.message || "JSON-RPC error");
          }
          if (data.result !== undefined) {
            return data.result;
          }
        } catch (e) {
          console.warn("Failed to parse line:", line, e);
        }
      }

      throw new Error("No valid result in streaming response");
    }

    // Handle regular JSON response
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || "JSON-RPC error");
    }

    return data.result;
  } catch (error) {
    console.error("MCP Request failed:", error);
    throw error;
  }
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