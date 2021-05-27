import React from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Table, Input, Button, Space } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Footer } = Layout;

export const App = () => {

    return (
        <Layout>
            <Footer style={{ padding: 0 }}>
                <Menu mode="horizontal" style={{ textAlign: 'center' }}>
                    <Menu.Item key="1">
                        <a href="https://nivan.ucoz.ua/" target="_blank">© 2016 «Новоіванівська ЗОШ І-ІІІ ст.»</a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="#" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href="https://www.facebook.com/profile.php?id=100039753174060" target="_blank"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                    </Menu.Item>
                </Menu>
            </Footer>
        </Layout>
    );
};

export default App;