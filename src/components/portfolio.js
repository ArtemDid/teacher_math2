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
                <div class="d-flex flex-column align-items-center">
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRMKtvF6PgmFXJyPphbpCsfX50CHZjeKAYkMEBTecSMw8rzKGbxdbcflSzdZElmHQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <br /><br /><br />
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRWQZEGYoA-PcSF3lXfW8jvp_OQqWodoP6X2gtF7YPtaD4ZFfMceqRnNFFVCx-PPg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <br /><br /><br />
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRYi-hPTPgDXsU3mScEIH_VwZHONdoJI3R7TioGoUV-TdgVjLdOHeY_wU1mAGr0fg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <br /><br /><br />
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRL5Ta3CJ0FIuOTkmNp1eMpnwvL5NDI9LfjDsidt9tuSqF2w5T5BK4J_j0SyHE_JQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <br /><br /><br />
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTEj2vTtwlwfY0OOxBNnRVMjHSe-tSsEpNAfTzIsvn5psv2qLq1oDDqi4l07gCeKg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <br /><br /><br />
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSWJO6A-eAUT0XjkEX7_nw1HJYDDY_0Qv8dkpelBXuCeQ-LCyVgbig5NHRvFdObHw/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1180" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </Content>
        </Layout>
    );
};

export default App;