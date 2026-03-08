import { useEffect } from "react";
import { DashboardCard } from "./component/DashboardCard";
import { DashboardEmpty } from "./component/DashboardEmpty";
import { useState } from "react";

export const DashboardPage = () => {

    const [orders, setOrders] = useState([]);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const shopperId = JSON.parse(sessionStorage.getItem("shopperid"));
  
    useEffect(() => {
            async function fetchOrders() { 
            const response = await fetch(`http://localhost:8000/660/orders?user.id=${shopperId}`, {
                method: "GET",
                headers: {
                    "content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            setOrders(data);
        }
        fetchOrders();
    }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}