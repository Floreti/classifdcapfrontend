import { Route, Switch } from "react-router-dom";
// IMPORT COMPONENTS
// import Header from "./components/Header";
import { useEffect, useState } from "react" 
// IMPORT PAGES
import Error404 from "../pages/404";
import Ads from "../pages/Ads";
import EditAd from "../pages/Edit_ad";
import EditUser from "../pages/Edit_user";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewAd from "../pages/New_ad";
import Register from "../pages/Register";
import Show from "../pages/Show";
import UserProfile from "../pages/User_profile";

function Main(props) {
    const [ads, setAds] = useState(null);

    const URL = "https://ancient-ravine-71492.herokuapp.com/";

    const getAds = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setAds(data);
    };

    const createAds = async (ad) => {
        // make post request to create ads
        await fetch(`${URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ad),
        });
        // update list of ads
        getAds();
    };

    // const updateAds = async (ad, id) => {
    //     // make put request to create people
    //     await fetch(URL + id, {
    //         method: "put",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(ad),
    //     })
    //     // update list of people
    //     getAds()
    // }

    // const deleteAds = async id => {
    //     // make delete request to create people
    //     await fetch(URL + id, {
    //         method: "delete",
    //     })
    //     // update list of people
    //     getAds()
    // }


    useEffect(() => getAds(), []);

    return (
        <div>
            <Switch>
                {/* <Route path="/ads" component={<Ads URL={URL} />} /> */}
                
                <Route
                    path="/ads"
                    render={rp => (
                        <Ads
                            URL={URL}
                            {...rp}
                        />
                    )}
                />
                
                
                
                {/* <Route exact path="/"><Home /></Route>
                <Route path="/404" component={<Error404 URL={URL} />} />
                <Route path="/ads/:id" component={<Show URL={URL} />} />
                <Route path="/new_ad" component={<newAd URL={URL} />} />
                <Route path="/ads/:id/edit" component={<editAd URL={URL} />} />
                <Route path="/register" component={<Register URL={URL} />} />
                <Route path="/login" component={<Login URL={URL} />} />
                <Route path="/user/:id" component={<userProfile URL={URL} />} />
                <Route path="/user/:id/edit" component={<editUser URL={URL} />} /> */}
            </Switch>
        </div>
    );
}

export default Main;