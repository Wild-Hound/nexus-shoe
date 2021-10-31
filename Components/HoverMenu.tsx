import React from "react";
// @ts-ignore
import styled from "styled-components";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Menu } from "antd";

const HoverMenuWrapper = styled("div")`
  color: #34495e;
  border: 1px solid #34495e;
  display: flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 22px;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: #f1f2f6;
`;

const UserIcon = styled(UserOutlined)`
  border: 1px solid #34495e;
  padding: 0.25rem;
  border-radius: 20px;
  font-size: 1.15rem;
`;

const MenuItem = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: black;
  /* text-align: center; */
  width: 100px;
`;

const LogoutBtn = styled("p")`
  margin: 0;
  color: #e74c3c;
  font-size: 1rem;
`;

const HoverMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <MenuItem>Wishlist</MenuItem>
      </Menu.Item>
      <Menu.Item key="1">
        <MenuItem>History</MenuItem>
      </Menu.Item>
      <Menu.Item key="1">
        <MenuItem>Settings</MenuItem>
      </Menu.Item>
      <Menu.Item key="2">
        <LogoutBtn>Logout</LogoutBtn>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <HoverMenuWrapper>
        <MenuOutlined />
        <Badge count={5}>
          <UserIcon />
        </Badge>
      </HoverMenuWrapper>
    </Dropdown>
  );
};

export default HoverMenu;
