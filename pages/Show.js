import { useState } from "react"

function Show(props) {
    const id = props.match.params.id
    const ads = props.ads
    const ad = ads.find(p => p._id === id)

    // state for form
    const [editForm, setEditForm] = useState(ad)

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        props.updateAds(editForm, ad._id)
        // redirect ads back to index
        props.history.push("/")
    }

    const removeAd = () => {
        props.deleteAds(ad._id)
        props.history.push("/")
    }

    return (
        <div className="ad">
            <h1>{ad.title}</h1>
            <h2>{ad.title}</h2>
            <img src={ad.image} alt={ad.title} />
            <button id="delete" onClick={removeAd}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.content}
                    name="content"
                    placeholder="content"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Ad" />
            </form>
        </div>
    )
}

export default Show