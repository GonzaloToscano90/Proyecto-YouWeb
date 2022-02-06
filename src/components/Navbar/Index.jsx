import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MovileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='hero'  >You-Web</NavLogo>
                <MovileIcon onClick={toggle}>
                    <FaBars/>
                </MovileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='conocenos' spy={true} smooth={true} offset={140} duration={800}>Conocenos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='servicios' spy={true} smooth={true} offset={160} duration={800}>Servicios</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='portafolio' spy={true} smooth={true} offset={160} duration={800}>Portafolio</NavLinks>
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
