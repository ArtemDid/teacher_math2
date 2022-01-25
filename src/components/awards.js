import React from "react";
import { Layout, Menu } from 'antd';
import { Image } from 'antd';


const { SubMenu } = Menu;
const { Content } = Layout;


export const App = () => {

  function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../images/awards', false, /\.(png|pdf|jpe?g|webp)$/));

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

console.log(images)

  return (
    <Layout className='content'>
      <Content className='awards'>
        {sliders}
      </Content>
    </Layout>
  );
};

export default App;