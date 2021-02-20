import React from "react";
import {Menu, Dropdown, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {initialState} from "../Game";

const AidaMenu = ({state, setState}) => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Button onClick={e => {
                    e.preventDefault();
                    setState({...initialState, language: 'tat'})
                }}>Татарский-Русский</Button>
            </Menu.Item>
            <Menu.Item key="1">
                <Button onClick={e => {
                    e.preventDefault();
                    setState({...initialState, language: 'rus'})
                }}>Русский-Татарский</Button>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Язык<DownOutlined/>
            </Button>
        </Dropdown>
    )
}
export default AidaMenu;