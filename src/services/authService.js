export async function login(authDetails) {
    const requestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(authDetails)
    }
      const response = await fetch("http://localhost:8000/login", requestOptions);
      const data = await response.json();
      if(data.accessToken) {
         // Decode JWT to get user ID
           const decodedToken = JSON.parse(atob(data.accessToken.split('.')[1]));
           const userId = decodedToken.sub; // "3" in your case
  
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("shopperid", userId);
           }

      if (!response.ok) {
        throw{ message: response.statusText, status: response.status };
      }
        return data;
}

export async function register(authdetails) {
    const requestOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(authdetails)
    }

    const response = await fetch("http://localhost:8000/register", requestOptions);
    const data = await response.json()

      if(data.accessToken) {
         // Decode JWT to get user ID
           const decodedToken = JSON.parse(atob(data.accessToken.split('.')[1]));
           const userId = decodedToken.sub; // "3" in your case
  
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("shopperid", userId);
           }
    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("shopperid");
    window.location.href = "/login";
}