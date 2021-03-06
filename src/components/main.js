import React from "react";
import { Layout, Menu } from 'antd';
import logo from '../images/main.webp';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



export const App = () => {

    return (
        <Layout className='content'>
            <Content className='main'>
                <div class="d-flex justify-content-evenly flex-wrap">
                    <div class="p-2 bd-highlight">
                    <img src={logo} alt='photo' style={{ width:'100%' }}></img>
                    </div>
                    <div class="p-2 bd-highlight" style={{ color: 'rgb(8, 20, 237)', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                        <div style={{ maxWidth: '400px', fontFamily: 'Pattaya', fontSize: 24 }}>Хороший вчитель може навчити інших навіть тому, чого сам не вміє.</div>
                        <div style={{ float: "right", fontFamily: 'Pattaya', fontSize: 14 }}>Тадеуш Котарбиньский</div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '24px' }}>
                    <span>Ласкаво просимо на персональний сайт</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div className='name'>Діденко Інни Олександрівни,</div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '20px' }}>
                    <span>учителя математики Новоіванівської філії Комишуваської гімназії "Джерело"</span>
                </div>
                <br />
                <div style={{ textAlign: 'center', fontSize: '28px' }}>
                    <b style={{ fontSize: '32px' }}>Шановні колеги,</b> тут ви знайдете:
                </div>
                <div className='d-flex justify-content-center'>
                    <div style={{ fontSize: '18px' }}>
                        <ul style={{ listStyle: 'circle' }}>
                            <li>Робочі програми з математики;</li>
                            <li>Розробки уроків, позакласних заходів та презентації до них;</li>
                            <li>Матеріали з підготовки до державної підсумкової атестації з математики.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '28px' }}>
                    <b style={{ fontSize: '32px' }}>Учні,</b> для вас:
                </div>
                <div className='d-flex justify-content-center'>
                    <div style={{ fontSize: '18px' }}>
                        <ul style={{ listStyle: 'circle' }}>
                            <li>Індивідуальні домашні завдання;</li>
                            <li>Матеріали з підготовки до державної підсумкової атестації;</li>
                            <li>Тести;</li>
                            <li>Корисні посилання;</li>
                            <li>Цікавий матеріал по предмету.</li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div style={{ textAlign: 'center', fontSize: '28px', maxWidth: '600px' }}>
                        Буду рада, якщо матеріали, розміщені на сайті, допоможуть Вам.
                    </div>
                </div>
            </Content>
            <div className='d-flex justify-content-end' style={{ paddingTop: '10px' }}>
                <div class="d-flex flex-column bd-highlight mb-3" style={{ maxWidth: '600px' }}>
                    <div style={{ textDecorationLine: 'underline' }}>
                        Контактна інформація:
                    </div>
                    <br />
                    <div>
                        с. Новоіванівка, Оріхівського р-ну,
                    </div>
                    <div>
                        Запорізької обл., Україна
                    </div>
                    <div>
                        Вул. Патріотична, 13а
                    </div>
                    <div>
                        <a href="tel:+38 (06141) 62-1-96"> Тел.: +38 (06141) 62-1-96 </a>
                    </div>
                    <div>
                        <a href="mailto:nivans96@gmail.com"> nivans96@gmail.com </a>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default App;