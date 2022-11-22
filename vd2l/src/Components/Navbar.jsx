import Menu from "../assets/HamburgerMenu.svg"

export default function Navbar() {
	return (
		<div className="navbar">
            <div className="top-blue-header"></div>
			<div className="nav-items">
				<h3 className="vd2l-text-logo">VD2L</h3>
				<nav>
                    
                </nav>
                <img src={Menu} alt="Hamburger Menu Icon" className="hamburger-menu-icon" />
			</div>
		</div>
	);
}
