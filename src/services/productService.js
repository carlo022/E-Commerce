import {API_URL} from "../api";

export async function getProductlist() {
      const response = await fetch(`${API_URL}/444/products`);
      const data = await response.json();
      if (!response.ok) {
        throw{ message: response.statusText, status: response.status };
      }
      return data;

}

export async function getFeaturedlist() {
      const response = await fetch(`${API_URL}/444/featured_products`);
      const data = await response.json()
      if (!response.ok) {
        throw{ message: response.statusText, status: response.status };
      }
      return data;
}