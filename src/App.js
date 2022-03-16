import React from "react";
import "./App.css";
import "./styles.scss"
// import { Route, Routes } from "react-router-dom";
// IMPORT COMPONENTS
// import Header from "./components/Header";
import Nav from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

// // IMPORT PAGES
// import Error404 from "./pages/404";
// import Ads from "./pages/Ads";
// import EditAd from "./pages/Edit_ad";
// import EditUser from "./pages/Edit_user";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import NewAds from "./pages/New_ad";
// import Register from "./pages/Register";
// import Show from "./pages/Show";
// import UserProfile from "./pages/User_profile";


function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://ancient-ravine-71492.herokuapp.com/";

  return (
    <div className="App">
      <Nav />
      {/* <Routes> */}
      {/* <Route path="/ads" component={<Ads URL={URL} />} /> */}
      {/* {/* <Route exact path="/"><Home /></Route> */}

      {/* <Route path="/" element={rp => (<Home />)} />
        <Route path="/404" element={rp => (<Error404 URL={URL}{...rp} />)} />
        <Route path="/ads" element={rp => (<Ads URL={URL}{...rp} />)} />
        <Route path="/ads/:id" element={rp => (<Show URL={URL}{...rp} />)} />
        <Route path="/new_ad" element={rp => (<NewAds URL={URL}{...rp} />)} />
        <Route path="/ads/:id/edit" element={rp => (<EditAd URL={URL}{...rp} />)} />
        <Route path="/register" element={rp => (<Register URL={URL}{...rp} />)} />
        <Route path="/login" element={rp => (<Login URL={URL}{...rp} />)} />
        <Route path="/user/:id" element={rp => (<UserProfile URL={URL}{...rp} />)} />
        <Route path="/user/:id/edit" element={rp => (<EditUser URL={URL}{...rp} />)} />
      </Routes> */}
      <Main />
      <Footer />
    </div>
  )
};

export default App;