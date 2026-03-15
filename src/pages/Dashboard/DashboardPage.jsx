import { useEffect } from "react";
import { DashboardCard } from "./component/DashboardCard";
import { DashboardEmpty } from "./component/DashboardEmpty";
import { useState } from "react";
import { getUserOrder } from "../../services";
import { Usetitle } from "../../hooks/Usetitle.jsx";

export const DashboardPage = () => {
  Usetitle("Dashboard - My Orders");

    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const data = await getUserOrder();
        setOrders(data);
      }
      fetchData();
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