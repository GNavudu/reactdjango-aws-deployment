import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ComponentExample from "./ComponentExample";
import ListActions from "./Components/ListActions";
import AxiosExample from "./Components/AxiosExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <ComponentExample />
      </div>
      <div>
        <AxiosExample />
      </div>
    </div>
  );
}

export default App;
