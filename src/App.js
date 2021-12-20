import CodeBar from "./components/CodeBar";
import Preview from "./components/Preview";
function App() {
  return (
    <>
      <div style={{ display: "flex", height: "100%" }} className="app">
        <CodeBar />
        <Preview />
      </div>
    </>
  );
}

export default App;
