export async function getProductlist() {
      const response = await fetch("http://localhost:8000/444/products");
      const data = await response.json();
      if (!response.ok) {
        throw{ message: response.statusText, status: response.status };
      }
      return data;

}

export async function getFeaturedlist() {
      const response = await fetch("http://localhost:8000/444/featured_products");
      const data = await response.json()
      if (!response.ok) {
        throw{ message: response.statusText, status: response.status };
      }
      return data;
}