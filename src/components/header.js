import React from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Table, Input, Button, Space } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header } = Layout;

export const App = () => {

    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" style={{ textAlign: 'center' }}>
                    <Menu.Item key="1">
                        <NavLink to="/" activeClassName="active">ГОЛОВНА</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/about" activeClassName="active">ПРО СЕБЕ</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/work" activeClassName="active">ДОСВІД РОБОТИ</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to="/portfolio" activeClassName="active">МОЄ ПОРТФОЛІО</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to="/myeduc" activeClassName="active">САМООСВІТА</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <NavLink to="/main2" activeClassName="active">НОРМАТИВНА БАЗА</NavLink>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <NavLink to="/znodpa" activeClassName="active">ЗНО та ДПА</NavLink>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <NavLink to="/main2" activeClassName="active">ОЛІМПІАДА З МАТЕМАТИКИ</NavLink>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <NavLink to="/main2" activeClassName="active">МОЇ УРОКИ</NavLink>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <NavLink to="/photo" activeClassName="active">ФОТОАЛЬБОМ</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <div style={{textAlign:'center', fontFamily: 'Roboto Mono', fontSize: 58, color: 'rgb(237,8,8)', textShadow:'0 0 10px rgba(0,0,0,0.5)'}}>Сторінка учителя математики</div>

        </Layout>
    );
};

export default App;