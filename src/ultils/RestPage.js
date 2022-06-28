import { Link } from "react-router-dom";

export default RestPage = (props) => {
    if (props.isLogged)
        return props.children
    return (
        <div>
            <h3>Acess denid.</h3>
            <Link to="/" className="nav-link">Home</Link>
        </div>
    )
}

