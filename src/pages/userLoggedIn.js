import axios from "axios";
import jwt_decode from "jwt-decode";

const setAuthToken = token => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

const loginUser = (userData, errorSetter, setIsUserLoggedIn, URL) => {
    axios
        .post(`${URL}/user/login`, userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);

            // Set token to Auth header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            localStorage.setItem("currentUserInfo", decoded);

            errorSetter(false)
            setIsUserLoggedIn(true)
        })
        .catch(error => {
            errorSetter(error.response.data)
        })
}

export const logoutUser = setIsUserLoggedIn => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem('currentUserInfo');
    // Remove auth header for future requests
    setAuthToken(false);

    if (typeof setIsUserLoggedIn === 'function')
        setIsUserLoggedIn(false)
};


const userLoggedIn = { loginUser, logoutUser }

export default userLoggedIn;