import "./App.css";

// IMPORT COMPONENTS
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import Ads from "../pages/Ads";
import Show from "../pages/Show";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://ancient-ravine-71492.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Switch>
      
        <Route path="/" element={<Home />} /><
        <Route path="/frontend/pages/Ads" element={<Ads URL={URL} />} />
        <Route path="/frontend/pages/Ads/:id" element={<Show URL={URL} />} />
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;