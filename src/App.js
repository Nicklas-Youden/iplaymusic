import './App.scss';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";

function App() {
  return (
    <div className="app">
      <Router>
        <Featured path="/" />
      </Router>
    </div>
  );
}

export default App;
