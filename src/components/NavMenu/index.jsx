import React, {useEffect} from "react";
import {Menu, Dropdown, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {initialState} from "../Game";
import {Link} from "react-router-dom";

const NavMenu = () => {
    // const {translate} = state;
    // const {chooseLanguage} = translate;

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/">Главная</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/about">Про нас</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Меню<DownOutlined/>
            </Button>
        </Dropdown>
    )
}
export default NavMenu;