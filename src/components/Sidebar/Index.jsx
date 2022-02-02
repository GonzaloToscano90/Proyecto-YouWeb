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
                <SidebarLink to="conocenos" onClick={toggle} >conocenos</SidebarLink>
                <SidebarLink to="servicios" onClick={toggle} >servicios</SidebarLink>
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
