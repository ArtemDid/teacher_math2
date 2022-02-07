import React from "react";
import { Layout, Menu, Image } from 'antd';
const { SubMenu } = Menu;
const { Content } = Layout;

export const App = () => {

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../images/awards', false, /\.(png|jpe?g|webp)$/));

  const sliders = (
    images.map((item, index) => {
      return (
        <Image
          alt='photo'
          key={index}
          width={400}
          src={item.default}
        />
      )
    })
  );

  return (
    <Layout className='content'>
      <Content className='awards'>
        <div class="d-flex justify-content-center flex-wrap">
          {sliders}
        </div>
      </Content>
    </Layout>
  );
};

export default App;