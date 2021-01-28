import './App.scss';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Playlists from './pages/Playlists';
import Player from './pages/Player';

function App() {
  return (
    <div className="app">
      <Router>
        <Featured path="/featured" />
        <Playlists path="/playlists" />
        <Player path="/player" />
      </Router>
    </div>
  );
}

export default App;
