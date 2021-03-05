import React, {useEffect} from "react";
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {
    initialState,
    phrasesRusTat,
    phrasesTatRus,
    wordsRusTat,
    wordsTatRus,
    wordsEngTat,
    wordsTatEng,
    phrasesEngTat,
    phrasesTatEng, translateBase,
    getPhrasesFirstSecond, getWordsFirstSecond
} from "../../localBase/base";
import Button from '../../ui/Button'
import styled from 'styled-components'
import {useHistory} from "react-router-dom";

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
                        words: getWordsFirstSecond('tat', 'rus'),
                        phrases: getPhrasesFirstSecond('tat', 'rus'),
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
                        words: getWordsFirstSecond('tat', 'rus'),
                        phrases: getPhrasesFirstSecond('tat', 'rus'),
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
                        words: getWordsFirstSecond('tat', 'eng'),
                        phrases: getPhrasesFirstSecond('tat', 'eng'),
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