import { useState } from "react"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>

            <Link to="/anime">Anime</Link>

            <Link to="/shop">Shop</Link>
            
            <Link to="/admin">Admin</Link>
        </nav>
    );

}

export default Navbar;