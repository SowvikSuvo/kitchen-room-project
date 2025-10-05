import { Suspense } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import OrderContainer from "./Components/OrderContainer";
import States from "./Components/States";

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();

  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={<span>Loading...⏳</span>}>
          <OrderContainer Promise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
    </div>
  );
}

export default App;
