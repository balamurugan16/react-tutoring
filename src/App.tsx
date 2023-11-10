import Pet from "./components/Pet";

function App() {
  const title = "Pet Adoption";
  return (
    <div>
      <h1>{title}</h1>
      <Pet name="Becky" age={4} breed="Indie" />
      <Pet name="Randy" age={2} breed="Golden Retriever" />
      <Pet name="Milky" age={3} breed="Indie" />
    </div>
  );
}

export default App;
