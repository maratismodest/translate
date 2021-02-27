import React, {useEffect} from "react";
import {Menu, Dropdown, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {initialState} from "../localBase/base";

const AidaMenu = ({state, setState}) => {
    const {translate} = state;
    const {chooseLanguage} = translate;

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a onClick={e => {
                    e.preventDefault();
                    setState({...initialState, language: 'tat'})
                }}>Татарский-Русский</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a onClick={e => {
                    e.preventDefault();
                    setState({...initialState, language: 'rus'})
                }}>Русский-Татарский</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a onClick={e => {
                    e.preventDefault();
                    setState({...initialState, language: 'tateng'})
                }}>Tatar-English</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a onClick={e => {
                    e.preventDefault();
                    setState({...initialState, language: 'engtat'})
                }}>English-Tatar</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {chooseLanguage}<DownOutlined/>
            </Button>
        </Dropdown>
    )
}
export default AidaMenu;