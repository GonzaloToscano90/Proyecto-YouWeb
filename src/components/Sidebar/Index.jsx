import React from 'react';
import {SidebarContainer, Icon, SidebarWrapper, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="conocenos" onClick={toggle} spy={true} smooth={true} offset={-25} duration={1300}>conocenos</SidebarLink>
                <SidebarLink to="servicios" onClick={toggle} spy={true} smooth={true} offset={-22} duration={1300}>servicios</SidebarLink>
                <SidebarLink to="portafolio" >portafolio</SidebarLink>
                <SidebarLink to="plantillas" >plantillas</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>

        <SideBtnWrap>
            <SidebarRoute to='contactanos'>Contactanos</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>);
};

export default Sidebar;
