import React from "react";
// @ts-ignore
import styled from "styled-components";
import { Menu, Dropdown, Button, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "../styles/SearchBar.module.scss";

const DownIcon = styled(DownOutlined)`
  transform: translateY(-2px);
`;
const SearchBarWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

const CategoryDropDown = styled(Dropdown)`
  font-size: 1rem;
  height: 100%;
`;

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const SearchBar = () => {
  const { Search } = Input;

  return (
    <SearchBarWrapper>
      <CategoryDropDown overlay={menu}>
        <Button>
          All Categories <DownIcon />
        </Button>
      </CategoryDropDown>
      <Search
        className={styles.searchBar}
        placeholder="input search loading default"
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
