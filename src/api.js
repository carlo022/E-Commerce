export const API_URL = "https://e-commerce-production-c777.up.railway.app" || "http://localhost:8000";

export const fetchData = async (resource, query = "") => {
  const response = await fetch(`${API_URL}/${resource}?q=${query}`);
  return response.json();
};