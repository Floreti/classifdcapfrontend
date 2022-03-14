import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Ads from "../pages/Ads";
import Show from "../pages/Show";

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
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ad),
        });
        // update list of ads
        getAds();
    };

    const updateAds = async (ad, id) => {
        // make put request to create people
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ad),
        })
        // update list of people
        getAds()
    }

    const deleteAds = async id => {
        // make delete request to create people
        await fetch(URL + id, {
            method: "delete",
        })
        // update list of people
        getAds()
    }


    useEffect(() => getAds(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Ads ads={ads} createPeople={createAds} />
                </Route>
                <Route
                    path="/ads/:id"
                    render={(rp) => (
                        <Show
                            ads={ads}
                            updateAds={updateAds}
                            deleteAds={deleteAds}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;