import React, { use } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";

const OrderContainer = ({ Promise }) => {
  const orders = use(Promise);
  console.log(orders);

  return (
    <div>
      <States></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Orders</h2>
          <div className="space-y-5 mt-5">
            {orders.map((item) => (
              <OrderCard key={item.id} order={item}></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5"> Cooking + Ready Food</div>
      </section>
    </div>
  );
};

export default OrderContainer;
