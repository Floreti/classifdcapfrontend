import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { Link } from "react-router-dom"


function Ads(props) {

    const { id } = useParams();
    const [ads, setAds] = useState([]);
    const [editForm, setEditForm] = useState(ads[0])

    const updateAd = async (ad, id) => {
        // make put request to create ads
        await fetch(props.URL + "ad/" + id, {           //The id needs to be outside of the string or its all read as 1 link. 
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ad),
        })
        // update list of people
        getAdsData()
    }

    const deleteAd = async id => {
        // make delete request to create people
        await fetch(props.URL + "ad/" + id, {
            method: "delete",
        })
        // update list of people
        getAdsData()
    }

    const removeAd = () => {
        deleteAd(Ads._id)
        props.history.push("/ads")
    }

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }
    // handlesubmit for form
    // const handleSubmit = event => {
    //     event.preventDefault()
    //     updateAd(editForm, ad._id)
    //     // redirect people back to index
    //     props.history.push("/")
    // }



    const getAdsData = async () => {
        const response = await fetch(props.URL + "/ads");
        const data = await response.json();
        // const match = data.find(p => p._id === id);
        // setAds(match);
        console.log(data)
        setAds(data);
    };
    useEffect(() => { getAdsData() }, []);


    // const loaded = () => {
    //     return (
    //         <div>
    //             {/* <h1>Post added</h1> */}
    //             {/* <h1>{ad.title}</h1>
    //             <h3>{ad.image}</h3>
    //             <h3>{ad.content}</h3> */}
    //             {/* <form onSubmit={handleSubmit}>
    //                 <input
    //                     type="text"
    //                     value={editForm.title}
    //                     name="title"
    //                     placeholder="title"
    //                     onChange={handleChange}
    //                 />
    //                 <input
    //                     type="text"
    //                     value={editForm.image}
    //                     name="image"
    //                     placeholder="image"
    //                     onChange={handleChange}
    //                 />
    //                 <input
    //                     type="text"
    //                     value={editForm.content}
    //                     name="content"
    //                     placeholder="content"
    //                     onChange={handleChange}
    //                 />
    //                 <input type="submit" value="Update Post" />
    //             </form> */}
    //             {/* <button id="delete" onClick={removeAd}>
    //                 delete
    //             </button> */}


    //         </div>
    //     )
    // }

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
        return <h1>Loading...</h1>
    }
    return ads ? loaded() : loading();


}
export default Ads;