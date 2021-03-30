import React from 'react'
import styled from "styled-components";
import {StateInterface} from "../../localBase/interfaces";
// import NavMenu from "../NavMenu";

const About = ({state, setState} : StateInterface) => {
    return (
        <StyledGame>
            {/*<StyledNavMenu>*/}
            {/*    <NavMenu state={state} setState={setState}/>*/}
            {/*</StyledNavMenu>*/}
            Здравствуйте!<br/>
            Я делаю сайт\приложение для изучения татарского (в том числе для англоговорящих)<br/>
            <a href='https://chamala.ru'>https://chamala.ru</a><br/>
            Есть три мини-игры:<br/>
            1)Перевести слово: есть слово и четыре варианта перевода<br/>
            2) Перевести фразу: есть фраза четыре варианта перевода<br/>
            3) Собери фразу: прослушать запись и собрать из предложенных слов фразу.<br/>
            Можно переключать языковые режимы "Татарский|Русский" и "English|Tatar" (меню наверху справа)<br/>
            Пожалуйста, сделайте пост об этом сайте и может, сами посоветуете какие еще можно сделать мини-игры.<br/>
            с уважением, Марат
        </StyledGame>
    )
}
export default About;

const StyledNavMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`
const StyledGame = styled.div`
    resList
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;
  .ant-divider-horizontal {
  margin: 12px 0 !important;
  }
`