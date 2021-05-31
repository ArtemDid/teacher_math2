import React from "react";
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Content } = Layout;


export const App = () => {

    return (
        <Layout className='content'>
            <Content className='norm'>
                <div class="d-flex justify-content-center flex-wrap" style={{ borderBottom: '2px solid green' }}>
                    <div class="p-2 bd-highlight" style={{ fontFamily: 'Kalam, cursive', fontSize: 48, color: 'green' }}>Нормативна база</div>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/11G9qdJ1pn5hxK9RVBcyw9Iwyk6qcQuO7/view?usp=sharing" class="btn btn-outline-success btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Особливості викладання математики на 2014 - 2015 н. р. 5-11 кл.</a>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <iframe src="https://drive.google.com/file/d/11G9qdJ1pn5hxK9RVBcyw9Iwyk6qcQuO7/preview" width="900" height="900"></iframe>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/1fzMi9T7ltc7tbuA3YQD3yeAaGoK0KgBM/view?usp=sharing" class="btn btn-outline-success btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>Лист МОН про організацію навчально-виховного процесу у 5 та 6 класах 2014-15 н. р.</a>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <iframe src="https://drive.google.com/file/d/1fzMi9T7ltc7tbuA3YQD3yeAaGoK0KgBM/preview" width="900" height="900"></iframe>
                </div>

            </Content>
        </Layout>
    );
};

export default App;