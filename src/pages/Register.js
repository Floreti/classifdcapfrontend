import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// import { useParams } from 'react-router'

function Register(props) {
    const [user, setUser] = useState([]);

    const getUserData = async () => {
        const response = await fetch(props.URL + "user");
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setUser(data);
    };
    const createUser = async (user) => {
        await fetch(props.URL + "user", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        getUserData();
    };
    useEffect(() => getUserData(), []);


    // state to hold formData
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(newUser);
        setNewUser({
            name: "",
            email: "",
            phone: "",
            password: ""
        });
    };

    // loaded function
    const loaded = () => {
        return user.map((user) => (
            <div key={user._id} className="user">
                <Link to={`/user/${user._id}`}><h1>{user.name}</h1></Link>
                <h3>{user.name}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form class="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newUser.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newUser.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newUser.phone}
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newUser.password}
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <input type="submit" value="Create User" />
            </form>
            {user ? loaded() : loading()}
        </section>
    );
}

export default Register;