const API_URL = "http://localhost:8000";

export const fetchData = async (resource, query = "") => {
  // Use 'q' for v0.17.4 or specific filters for v1.x
  const response = await fetch(`${API_URL}/${resource}?q=${query}`);
  return response.json();
};