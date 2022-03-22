import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function NewAds(props) {
    console.log(props.URL);
    const [ads, setAds] = useState([])

    const getAds = async () => {
        console.log("This is GetAds", props.URL)
        const response = await fetch(props.URL + "/ads")
        const data = await response.json()
        console.log(data)
        setAds(data)
    }

    const createAd = async ad => {
        // make post request to create ads
        await fetch(props.URL + "/ads", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                // "mode": "no-cors",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept Authorization',
                // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                // "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify(ad),
        })
        // update list of ads
        getAds()

        // state to hold formData
        // const [newForm, setNewForm] = useState({
        //     title: "",
        //     content: "",
        //     image: "",
        // });

        // const URL = "https://ancient-ravine-71492.herokuapp.com/Ads"


    }

    useEffect(() => getAds(), []);
    // state to hold formData
    const [newAd, setNewAd] = useState({
        title: "",
        image: "",
        content: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        console.log(event.target);
        setNewAd({ ...newAd, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createAd(newAd);
        setNewAd({
            title: "",
            content: "",
            image: "",
        });
    };

    // loaded function
    const loaded = () => {
        return ads.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to={`/ads/${ad._id}`}><h1>{ad.title}</h1></Link>
                <img src={ad.image} alt={ad.title} />
                <h3>{ad.content}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={setAds.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={setAds.content}
                    name="content"
                    placeholder="content"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={setAds.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Ad" />
            </form>
            {ads ? loaded() : loading()}
        </section>
    );
};

export default NewAds;

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

    // fetch('http://bar.com/data.json', {
    //     mode: 'no-cors' // 'cors' by default
    // }).then(function (response) {
    //     // Do something with response
    // });




