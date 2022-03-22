import { Route } from "react-router";
// import { useEffect, useState } from "react"
import { Routes } from "react-router-dom";

// IMPORT PAGES
import Error404 from "../pages/404";
import Ads from "../pages/Ads";
import EditAd from "../pages/Edit_ad";
import EditUser from "../pages/Edit_user";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewAds from "../pages/New_ad";
import Register from "../pages/Register";
import Show from "../pages/Show";
import UserProfile from "../pages/User_profile";

function Main(props) {
    // const [ads setAds] = useState(null);

    // // const URL = "https://ancient-ravine-71492.herokuapp.com/";
    const URL = "http://localhost:4000";

    // const getAds = async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     setAds(data);
    // };

    // useEffect(() => getAds(), []);

    return (
        <div>
            <h1>This is Main Body</h1>
            <img src="https://images.pexels.com/photos/5044497/pexels-photo-5044497.jpeg" alt="hero" />
            <Routes>
                {/* <Route path="/ads" component={<Ads URL={URL} />} /> */}
                {/* {/* <Route exact path="/"><Home /></Route> */}

                <Route path="/" element={<Home />} />
                <Route path="/404" element={<Error404 URL={URL} />} />
                <Route path="/ads" element={<Ads URL={URL} />} />
                <Route path="/ads/:id" element={<Show URL={URL} />} />
                <Route path="/new_ad" element={<NewAds URL={URL} />} />
                <Route path="/ads/:id/edit" element={<EditAd URL={URL} />} />
                <Route path="/register" element={<Register URL={URL} />} />
                <Route path="/login" element={<Login URL={URL} />} />
                <Route path="/user/:id" element={<UserProfile URL={URL} />} />
                <Route path="/user/:id/edit" element={<EditUser URL={URL} />} />
            </Routes>
        </div>
    );
}

export default Main;