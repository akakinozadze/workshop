import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./pages/navigateBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
