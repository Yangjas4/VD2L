import Menu from "../assets/HamburgerMenu.svg";
import { useState } from "react";


export default function Navbar() {

    const [ hamburgerOpen, setHamburgerOpen ] = useState(false);

    function handleHamburgerOpen() {
        setHamburgerOpen(hamburgerOpen => !hamburgerOpen);
    }


	return (
		<div className="navbar">
            <div className="top-blue-header"></div>
			<div className="nav-items">
				<h3 className="vd2l-text-logo">VD2L</h3>
				<nav className="desktop-nav-bar">
                    <p className="nav-item">Home</p>
                    <p className="nav-item">Rules</p>
                    <p className="nav-item">Season 0</p>
                    <p className="nav-item">Inhouse</p>
                </nav>
                <img src={Menu} alt="Hamburger Menu Icon" className="hamburger-menu-icon" onClick={() => handleHamburgerOpen()}/>
			</div>
            {hamburgerOpen && <div className="hamburger-menu-sidebar">
                <p className="x-button" onClick={() => handleHamburgerOpen()}>x</p>
                <nav>
                    <p className="nav-item">Home</p>
                    <p className="nav-item">Rules</p>
                    <p className="nav-item">Season 0</p>
                    <p className="nav-item">Inhouse</p>
                </nav>
            </div>}
		</div>
	);
}
