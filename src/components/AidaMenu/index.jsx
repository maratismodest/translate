import React, {useState} from "react";
import {Menu, Dropdown} from 'antd';
import {
    phrasesTatRus,
    wordsTatRus,
    wordsTatEng,
    phrasesEngTat,
} from "../../localBase/base";
import Button from '../../ui/Button'
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import i18n from "i18next";
import Icon from "../Icon";

const AidaMenu = ({state, setState}) => {
    const history = useHistory();
    const [color, setColor] = useState('white')

    const menu = (
        <Menu style={{textAlign: 'center'}}>
            <Menu.Item key="0">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'rus',
                        words: wordsTatRus,
                        phrases: phrasesTatRus,
                        firstLanguage: 'rus',
                        secondLanguage: 'tat',
                    })
                    history.push('/')
                }}>RU</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'tat',
                        words: wordsTatRus,
                        phrases: phrasesTatRus,
                        firstLanguage: 'tat',
                        secondLanguage: 'rus',
                    })
                    history.push('/')
                }}>TA</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'eng',
                        words: wordsTatEng,
                        phrases: phrasesEngTat,
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
            <MenuButton>
                <Icon icon={'world'} style={{marginRight: 8}} fill={color}/>{i18n.t("chooseLanguage")}
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