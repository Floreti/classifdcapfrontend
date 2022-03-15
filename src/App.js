import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./styles.scss"
// IMPORT COMPONENTS
// import Header from "./components/Header";
import Nav from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

// IMPORT PAGES
import Error404 from "./pages/404";
import Ads from "./pages/Ads";
import editAd from "./pages/Edit_ad";
import editUser from "./pages/Edit_user";
import Home from "./pages/Home";
import Login from "./pages/Login";
import newAd from "./pages/New_ad";
import Register from "./pages/Register";
import Show from "./pages/Show";
import userProfile from "./pages/User_profile";
function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://ancient-ravine-71492.herokuapp.com/"
  return (
    <div className="App">
      <Nav />
      <Main />
        {/* <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/404" component={<Error404 URL={URL}/>} />
          <Route path="/ads" component={<Ads URL={URL} />} />
          <Route path="/ads/:id" component={<Show URL={URL} />} />
          <Route path="/new_ad" component={<newAd URL={URL} />} />
          <Route path="/ads/:id/edit" component={<editAd URL={URL} />} />
          <Route path="/register" component={<Register URL={URL} />} />
          <Route path="/login" component={<Login URL={URL} />} />
          <Route path="/user/:id" component={<userProfile URL={URL} />} />
          <Route path="/user/:id/edit" component={<editUser URL={URL} />} />
        </Switch> */}
      
      <Footer />
    </div>
  )
};

export default App;