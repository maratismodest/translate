import {Menu, Dropdown, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {initialState} from "../Game";

const AidaMenu = ({state, setState}) => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a onClick={e => {
                    e.preventDefault();
                    setState({...initialState, gameState: 'words'})
                }}>Слова</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a onClick={e => {
                    e.preventDefault();
                    setState({...initialState, gameState: 'phrases'})
                }}>Фразы</a>
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
export default AidaMenu;