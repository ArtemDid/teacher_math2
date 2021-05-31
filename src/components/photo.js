import React from "react";
import { Layout, Carousel, Menu, Breadcrumb } from 'antd';

const contentStyle = {
    height: '70vh',
    lineHeight: '400px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
};

const { Header, Content, Sider } = Layout;

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../images/photo', false, /\.(png|jpe?g|webp)$/));

const sliders = (
    images.map((item, index) => {
        return (
            <div>
                <img src={item.default} key={index} alt='photo' style={contentStyle}></img>
            </div>
        )
    })
);

export const App = () => {

    return (
        <Layout style={{ padding: '0px 100px 100px' }}>
            <Content className='work'>
                <div class="d-flex justify-content-around flex-wrap" style={{ borderBottom: '2px solid blue' }}>
                    <div class="p-2 bd-highlight" style={{ fontFamily: 'Kalam, cursive', fontSize: 48, color: 'blue' }}>Фотоальбом</div>
                </div>
                <br />

                <Carousel autoplay effect="fade">
                    {sliders}
                </Carousel>
            </Content>
        </Layout>
    );
};

export default App;