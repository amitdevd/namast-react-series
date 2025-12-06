import {LOGO_URL} from "../utils/constants";
import { useState } from "react";


const Header = () => {

    let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo img-fluid" alt="logo" />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>
                    <button className="login" 
                    onClick={() => {
                       btnNameReact=== "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>
                    {btnNameReact}
                    </button>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default Header;