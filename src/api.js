export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const fetchData = async (resource, query = "") => {
  const response = await fetch(`${API_URL}/${resource}?q=${query}`);
  return response.json();
};