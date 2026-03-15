import {API_URL} from "../api";

export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const shopperId = JSON.parse(sessionStorage.getItem("shopperid"));

        const requestOptions ={
            method: "GET",
            headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`}
                     
            }
        const response = await fetch(`${API_URL}/600/users/${shopperId}`, requestOptions);
        const data = await response.json();
        return data;
}

export async function getUserOrder() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const shopperId = JSON.parse(sessionStorage.getItem("shopperid"));
     
    const requestOptions ={
            method: "GET",
                headers: {
                    "content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
         const response = await fetch(`${API_URL}/660/orders?user.id=${shopperId}`, requestOptions);
            const data = await response.json();
            return data;


}

export async function createOrder(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const shopperId = JSON.parse(sessionStorage.getItem("shopperid"));

            const order = {
            user: {
                name: user.name,
                email: user.email,
                id: shopperId
            },
            cartList: cartList,
            amount_paid: total,
            quantity: cartList.length,
            date: new Date().toISOString()
        }
        const response = await fetch(`${API_URL}/660/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(order)
        });
        const data = await response.json();
        return data;

}
