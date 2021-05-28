import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export const App = () => {

    return (
        <Layout style={{ padding: '0px 100px 100px' }}>
            <Content className='work'>
                <div class="d-flex justify-content-around flex-wrap" style={{ borderBottom: '2px solid blue' }}>
                    <div class="p-2 bd-highlight" style={{ fontFamily: 'Kalam, cursive', fontSize: 48, color: 'blue' }}>Досвід роботи</div>
                </div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <iframe src="https://drive.google.com/file/d/1i-pg3dTeuyvJpzYthlYmLQVnFoixPRBU/preview" width="1000" height="900"></iframe>
                </div>
            </Content>
        </Layout>
    );
};

export default App;