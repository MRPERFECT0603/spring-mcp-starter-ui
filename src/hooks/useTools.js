import { useState, useEffect } from "react";
import mcpApi from "../services/api";

export const useTools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tools from MCP backend
  const fetchTools = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Fetching tools from MCP backend...");
      const toolsList = await mcpApi.listTools();
      console.log("Tools fetched successfully:", toolsList);

      setTools(toolsList);
    } catch (err) {
      console.error("Failed to fetch tools:", err);
      const errorMsg = err.message || "Unknown error";

      // Provide helpful error messages
      if (errorMsg.includes("Failed to fetch") || errorMsg.includes("NetworkError")) {
        setError("Cannot connect to MCP server. Is it running on http://localhost:8001?");
      } else if (errorMsg.includes("CORS")) {
        setError("CORS error - Backend needs to allow requests from this origin");
      } else {
        setError(errorMsg);
      }

      setTools([]);
    } finally {
      setLoading(false);
    }
  };

  // Execute a tool with arguments
  const executeTool = async (name, args) => {
    try {
      const result = await mcpApi.callTool(name, args);
      return result;
    } catch (err) {
      console.error("Failed to execute tool:", err);
      throw err;
    }
  };

  // Fetch tools on mount
  useEffect(() => {
    fetchTools();
  }, []);

  return {
    tools,
    loading,
    error,
    refetch: fetchTools,
    executeTool,
  };
};