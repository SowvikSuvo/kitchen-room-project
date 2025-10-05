import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";
import CookingCard from "./cards/cookingCard";
import ReadyCard from "./cards/ReadyCard";
import { toast } from "react-toastify";

const OrderContainer = ({ Promise }) => {
  const data = use(Promise);

  const [orders, setOrders] = useState(data);

  const [cookingItems, setCookingItems] = useState([]);

  const [readyItems, setReadyItems] = useState([]);

  const handleOrder = (order) => {
    const isExist = cookingItems.find((item) => item.id == order.id);
    if (order !== isExist) {
      toast.success("Food is Cooking Now");
    }

    if (isExist) {
      toast.error("Order already on Processing");
      return;
    }

    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  const handleCooking = (order) => {
    // 1. readyItem er vitore order k dukao
    toast.success("Your Food is ready");
    order.cookedAt = new Date().toLocaleTimeString();
    const newReadyItems = [...readyItems, order];
    setReadyItems(newReadyItems);

    // 2. cooking items er vitor theke order k remove koro
    const remaining = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(remaining);

    // 3. orders theke order take remove kore dite hobe
    const remainingOrders = orders.filter((item) => item.id !== order.id);
    setOrders(remainingOrders);
  };

  return (
    <div>
      <States
        cookingTotal={cookingItems.length}
        orderTotal={orders.length}
        readyTotal={readyItems.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Orders</h2>
          <div className="space-y-5 mt-5">
            {orders.map((order) => (
              <OrderCard
                handleOrder={handleOrder}
                key={order.id}
                order={order}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                handleCooking={handleCooking}
                key={order.id}
                order={order}
              ></CookingCard>
            ))}
          </div>
          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
            {readyItems.map((order) => (
              <ReadyCard key={order.id} order={order}></ReadyCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
