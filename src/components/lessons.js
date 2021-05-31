import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export const App = () => {

    return (
        <Layout className='content'>
            <Content className='lessons'>
                <div class="d-flex justify-content-center flex-wrap" style={{ borderBottom: '2px solid black' }}>
                    <div class="p-2 bd-highlight" style={{ fontFamily: 'Kalam, cursive', fontSize: 48, color: 'black' }}>Мої уроки</div>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/1zQGXufwKs56nQBA767ZPmUZ1xpOweNhT/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Урок геометрії у 7 класі: "Суміжні кути"</a>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/1ELiGsuXcbIyjBAOQiugnkoe2V5YA6c11/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Урок алгебри у 9 класі: "Перетворення графіків функції"</a>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/10yOG9K8OLmNnqXT_LjrLfiSkSeeDKRxX/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Родинне свято</a>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/10xCNGSpvzOEKk70evd8_LgOsLcp54Kk-/view?usp=sharing" class="btn btn-outline-primary btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>«Міс Математика» та «Містер Математика»</a>
                </div>
            </Content>
        </Layout>
    );
};

export default App;