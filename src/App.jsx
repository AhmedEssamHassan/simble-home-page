import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  const [isSideShow, setSide] = useState(false);

  return (
    <main className="App d-flex flex-column">
      <Nav setSide={setSide} />
      <Home />
      <Footer />
      <Sidebar setSide={setSide} isSideShow={isSideShow} />
    </main>
  );
}

export default App;
