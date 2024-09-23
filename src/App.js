import Header from "./components/header";
import Login from "./pages/login";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Login />
    </div>
  );
}

export default App;
