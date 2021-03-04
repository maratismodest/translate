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
    phrasesTatEng, translateBase
} from "../localBase/base";
import Button from '../../ui/Button'
import styled from 'styled-components'

const AidaMenu = ({state, setState}) => {
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
                    })
                }}>Татарский-Русский</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'rus',
                        words: wordsRusTat,
                        phrases: phrasesRusTat,
                        translate: translateBase.rus,
                    })
                }}>Русский-Татарский</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'tateng',
                        words: wordsTatEng,
                        phrases: phrasesTatEng,
                        translate: translateBase.eng,
                    })
                }}>Tatar-English</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a onClick={e => {
                    e.preventDefault();
                    setState({
                        ...state,
                        language: 'engtat',
                        words: wordsTatEng,
                        phrases: phrasesTatEng,
                        translate: translateBase.eng,
                    })
                }}>English-Tatar</a>
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