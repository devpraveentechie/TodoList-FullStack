import "./App.css";
import HeaderNavigation from "./components/HeaderNavigation";
import { PageRouter } from "./Routes";

function App() {
  return (
    <div className="App">
      <HeaderNavigation />
      <PageRouter />
    </div>
  );
}

export default App;
