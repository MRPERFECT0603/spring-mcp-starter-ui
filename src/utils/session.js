const KEY = "mcp_endpoint";

export const setEndpoint = (url) => {
  localStorage.setItem(KEY, url);
};

export const getEndpoint = () => {
  return localStorage.getItem(KEY);
};

export const clearSession = () => {
  localStorage.removeItem(KEY);
};