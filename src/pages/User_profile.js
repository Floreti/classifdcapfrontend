import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

function UserProfile(props) {
    const { id } = useParams();
    // console.log(id);
    //const []
    //const id = props.match.params.id
    // const ads = props.ads
    // const ad = ads.find(p => p._id === id)

    const [user, setUser] = useState([]);
    const getUserData = async () => {
        const response = await fetch(`https://ancient-ravine-71492.herokuapp.com/user`);   //user/:id  User  UserProfile?
        const data = await response.json();
        const match = data.find(u => u._id === id.id)
        setUser(match);
    };
    const updateUser = async (user, id) => {
        await fetch(props.URL + "user/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        // update list of people
        getUserData();
    };

    // state for form
    const [editForm, setEditForm] = useState(user)

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        updateUser(editForm, user._id)
        // redirect user back to index
        // props.history.push("/")
    }

    const deleteUser = async id => {
        await fetch(props.URL + "user/" + id, {
            method: "delete",
        })
        getUserData();
    };

    const removeUser = () => {
        deleteUser(user._id)
        // props.history.push("/")
    }

    function loading() {
        return (
            <div className="person">
                <h2>User Profile</h2>
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Phone: {user.phone}</h3>
                <form class="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={editForm.name}
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.email}
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.phone}
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.password}
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Update Profile" />
                    <button class="button" id="delete" onClick={removeUser}>Delete</button>
                </form>
            </div>
        )
    }

    function notloading() {
        return (
            <h1>Nothing Loaded</h1>
        )
    }

    useEffect(() => getUserData(), []);

    return user ? loading() : notloading()
}

export default UserProfile;