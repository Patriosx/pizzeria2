import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon toggle={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/">Pizzas</SidebarLink>
				<SidebarLink to="/">Desserts</SidebarLink>
				<SidebarLink to="/">Full Menu</SidebarLink>
			</SidebarMenu>
			<SidebarBtnWrap>
				<SidebarRoute to="/">Order now</SidebarRoute>
			</SidebarBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;
