import React from "react";
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {
    phrasesTatRus,
    wordsTatRus,
    wordsTatEng,
    phrasesEngTat,
    translateBase,
} from "../../localBase/base";
import Button from '../../ui/Button'
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import world from './world.svg'

const AidaMenu = ({state, setState}) => {
    const history = useHistory();
    const {translate} = state;
    const {chooseLanguage} = translate;

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'tat',
                        words: wordsTatRus,
                        phrases: phrasesTatRus,
                        translate: translateBase.tat,
                        firstLanguage: 'tat',
                        secondLanguage: 'rus',
                    })
                    history.push('/')
                }}>TA</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'rus',
                        words: wordsTatRus,
                        phrases: phrasesTatRus,
                        translate: translateBase.rus,
                        firstLanguage: 'rus',
                        secondLanguage: 'tat',
                    })
                    history.push('/')
                }}>RU</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'eng',
                        words: wordsTatEng,
                        phrases: phrasesEngTat,
                        translate: translateBase.eng,
                        firstLanguage: 'eng',
                        secondLanguage: 'tat',
                    })
                    history.push('/')
                }}>EN</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <MenuButton className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <img src={world} alt="world" style={{paddingRight: 8}}/>
                {chooseLanguage}<DownOutlined/>
            </MenuButton>
        </Dropdown>
    )
}
export default AidaMenu;

const MenuButton = styled(Button)`
  border-radius: 38px;
  height: 44px;
  width: auto;
`