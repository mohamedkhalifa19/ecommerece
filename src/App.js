import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Componenets/Navbar";
import { store } from "./rtk/store";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Componenets/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
