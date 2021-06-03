import React, { useContext, useState } from 'react';
import i18n from 'i18next';
import { useHistory } from 'react-router-dom';
import AppContext from '../../AppContext';
import './styles.scss';
import styled from 'styled-components';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export const DesktopMenu = ({ user, LanguageMenuList }: any) => {
  const StyledMenu = styled(Menu)`
    background: none;
    border: none;
    font-size: 16px;
    line-height: 126%;
    font-weight: 600;
  `;

  const { setModalVisible } = useContext(AppContext);
  const [menuState, setMenuState] = useState({ current: 'mail' });
  const history = useHistory();
  const handleClick = (e: any) => {
    setMenuState({ current: e.key });
  };

  return (
    <StyledMenu onClick={handleClick} selectedKeys={[menuState.current]} mode="horizontal">
      {user ? null : (
        <Menu.Item key="login" onClick={() => setModalVisible(true)}>
          {i18n.t('login')}
        </Menu.Item>
      )}

      {user ? (
        <Menu.Item key="profile" onClick={() => history.push('/user')}>
          {i18n.t('profile')}
        </Menu.Item>
      ) : null}

      <SubMenu key="languages" title={i18n.t('languages')} popupClassName="popupSubMenu">
        {LanguageMenuList.map((item: any) => {
          const { text, cb } = item;
          return (
            <Menu.Item key={text} onClick={cb}>
              {text}
            </Menu.Item>
          );
        })}
      </SubMenu>
    </StyledMenu>
  );
};
