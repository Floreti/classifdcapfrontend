import { useState } from "react";
import { Link } from "react-router-dom"

function NewAd(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: '',
        image: '',
        content: '',
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createAds(newForm);
        setNewForm({
            title: '',
            image: '',
            content: '',
        });
    };

    // loaded function
    const loaded = () => {
        return props.ads.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to={`/ads/${ad._id}`}><h1>{ad.title}</h1></Link>
                <img src={ad.image} alt={ad.title} />
                <h3>{ad.title}</h3>
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
            {props.ads ? loaded() : loading()}
        </section>
    );
}

export default NewAd;