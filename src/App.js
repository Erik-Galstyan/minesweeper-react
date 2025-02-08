import Home from "./pages/home/Home";
import "./reset.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [view, setView] = useState(null);

  if (view === "easy") {
    return <div>Easy page</div>;
  }

  if (view === "normal") {
    return <div>Normal page</div>;
  }

  if (view === "hard") {
    return <div>Hard page</div>;
  }

  return (
    <div className="app">
      <Home setView={setView} />;
    </div>
  );
}

export default App;
