import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";

function App() {
  return (
    <Router>
      <Featured path="/" />
    </Router>
  );
}

export default App;
