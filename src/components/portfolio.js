import React from "react";
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Content } = Layout;


export const App = () => {

    return (
        <Layout className='content'>
            <Content className='work'>
                <div class="d-flex justify-content-around flex-wrap" style={{ borderBottom: '2px solid blue' }}>
                    <div class="p-2 bd-highlight" style={{ fontSize: 48, color: 'blue' }}>Моє портфоліо</div>
                </div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRMKtvF6PgmFXJyPphbpCsfX50CHZjeKAYkMEBTecSMw8rzKGbxdbcflSzdZElmHQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </Content>
        </Layout>
    );
};

export default App;