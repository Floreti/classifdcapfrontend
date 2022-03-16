import React from 'react';
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom"

const Ads = (props) => {
    // create state to hold projects
    const [ads, setAds] = useState([]);

    const URL = "http://localhost:4000/";
    const getAdsData = async () => {
        const response = await fetch(props.URL + "ad");
        console.log(response)
        const data = await response.json();
        setAds(data);
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => { getAdsData() }, []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return ads.map((ad) => (
            <div key={ad._id} className="ad">
                <h1>{ad.title}</h1>
                <img style={{ width: "350px", height: "350px", borderRadius: "80px", border: "solid #e03499 5px" }} img src={ad.image} alt="" />
                <h3>{ad.content}</h3>
            </div>
        ));
    };

    return ads ? loaded() :
        
            <h1>Loading...</h1>;
            <h2>This is where posts are suppose to show.</h2>;
        

};

export default Ads;
