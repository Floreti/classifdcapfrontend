import { useState } from "react";
import { Link } from "react-router-dom"

function NewAds(props) {
    const [ads, setAds] = useState(null)
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        content: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        console.log(event.target);
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };
    const URL = "http://localhost:4000/Ads"

    const getAds = async () => {
        console.log("This is GetAds")
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setAds(data)
    }



    // fetch('http://bar.com/data.json', {
    //     mode: 'no-cors' // 'cors' by default
    // }).then(function (response) {
    //     // Do something with response
    // });

    const createAds = async ad => {
        // make post request to create ads
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(ad),
        })
        // update list of ads
        getAds()
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createAds(newForm);
        setNewForm({
            title: "",
            image: "",
            content: "",
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
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.content}
                    name="content"
                    placeholder="content"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Ad" />
            </form>
            {ads ? loaded() : loading()}
        </section>
    );
};

export default NewAds;