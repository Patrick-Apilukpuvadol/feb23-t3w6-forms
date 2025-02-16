
// 3 Pages to link:
//Homepage
// /about - About page
// /contact-us - Contact Us Page

import { NavLink } from "react-router-dom";

export default function Navbar(props){
    return (
        <nav>
            <h3>Navbar</h3>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Home
					</NavLink>
                </li>
                <li>
                    <NavLink to="/about" end style={({isActive}) => isActive ? {color: "red"} : undefined} >
						About
					</NavLink>	
                </li>
                <li>
                    <NavLink to="/about/contact" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Contact
					</NavLink>
                </li>
            </ul>
        </nav>
    )
}