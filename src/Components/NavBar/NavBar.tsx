import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const NavBar: React.FC = () => {
    return(
        <Navbar color="light" className="border-bottom">
            <NavbarBrand>Problems</NavbarBrand>
        </Navbar>
    );
}

export default NavBar 