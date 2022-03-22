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
  // const URL = "https://ancient-ravine-71492.herokuapp.com/";
  const URL = "http://localhost:4000/";

  return (
    <div className="App" style={{
      backgroundImage: `url("https://images.pexels.com/photos/5044497/pexels-photo-5044497.jpeg")`
    }}>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
};

export default App;