import { useState } from "react";
import Loader from "./components/Loader";
import "./reset.scss";

function App() {


  const [isLoading, setIsLoading] = useState({ Loader });


  return isLoading ?
    (
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
    ) : (
      <div className="App">
        <h1>mainPage</h1>
      </div>
    );
}

export default App;
