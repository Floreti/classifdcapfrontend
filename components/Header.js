import { Link } from "react-router-dom";


function header(props) {

    return (

        <nav className="nav">

            <Link to="/">

                <div>Classifieds App</div>

            </Link>

        </nav>
    );
}

export default header;