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
                    <a href="https://drive.google.com/file/d/1kjTP6GdCzoeqsNyuYuWvD1HN2KPEwhdf/view?usp=sharing" class="btn btn-outline-success btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>
                        Особливості викладання математики на 2021 - 2022 н. р. 5-11 кл.</a>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <iframe src="https://drive.google.com/file/d/1kjTP6GdCzoeqsNyuYuWvD1HN2KPEwhdf//preview" width="900" height="900"></iframe>
                </div>
                <br />
                <div class="p-2 bd-highlight" style={{ textAlign: 'center', fontFamily: 'Pattaya' }}>
                    <a href="https://drive.google.com/file/d/1n5YqpTdcB9_g5N0hYUfpp32xoCqxjFLQ/view?usp=sharing" class="btn btn-outline-success btn-lg" tabindex="-1" role="button" aria-disabled="true" target='_blank'>
                        Лист МОН про організацію навчально-виховного процесу 2021 н. р.</a>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <iframe src="https://drive.google.com/file/d/1n5YqpTdcB9_g5N0hYUfpp32xoCqxjFLQ/preview" width="900" height="900"></iframe>
                </div>

            </Content>
        </Layout>
    );
};

export default App;