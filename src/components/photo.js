import React from "react";
import { Layout, Carousel } from 'antd';

const { Content } = Layout;

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../images/photo', false, /\.(png|jpe?g|webp)$/));

const sliders = (
    images.map((item, index) => {
        return (
            <div>
                <img src={item.default} key={index} alt='photo' className='photo'></img>
            </div>
        )
    })
);

export const App = () => {

    return (
        <Layout className='content'>
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