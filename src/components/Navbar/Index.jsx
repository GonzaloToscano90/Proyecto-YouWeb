import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MovileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>You-Web</NavLogo>
                <MovileIcon onClick={toggle}>
                    <FaBars/>
                </MovileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='conocenos'>Conocenos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='servicios'>Servicios</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='portafolio'>Portafolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='plantillas'>Plantillas</NavLinks>
                    </NavItem>
                </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='contactanos' >Contactanos</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>  
    </>
  );
};

export default Navbar;
