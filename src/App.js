import "./App.css";
import "./style.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
