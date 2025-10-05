import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
    </div>
  );
}

export default App;
