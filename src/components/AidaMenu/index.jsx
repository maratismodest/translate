import React, {useEffect} from "react";
import {Menu, Dropdown, Button} from 'antd';
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
import {phrases} from "../localBase/phrases";
import {Link} from "react-router-dom";

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
            <Menu.Item key="4">
                <Link to={'/'}>{translate.mainPage}</Link>
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