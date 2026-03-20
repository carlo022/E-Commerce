export const API_URL = "http://localhost:8000";

export const fetchData = async (resource, query = "") => {
  const response = await fetch(`${API_URL}/${resource}?q=${query}`);
  return response.json();
};