import "./App.css";
import data from "./data.json";
import SnippetNews from "./components/SnippetNews";
function App() {
  return (
    <div className="column">
      <SnippetNews data={data}></SnippetNews>
    </div>
  );
}

export default App;
