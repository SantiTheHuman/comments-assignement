import "./App.css";
import { getCommentsData } from "../services/comments-data";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <button onClick={() => getCommentsData(0)}>Get comments</button>
    </div>
  );
}

export default App;
