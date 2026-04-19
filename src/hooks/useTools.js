import { useState, useEffect } from "react";
import { mcpApi } from "../services/api";

export const useTools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tools from MCP backend
  const fetchTools = async () => {
    try {
      setLoading(true);
      setError(null);
      const toolsList = await mcpApi.listTools();
      setTools(toolsList);
    } catch (err) {
      console.error("Failed to fetch tools:", err);
      setError(err.message);
      // Fallback to empty array if backend is not available
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