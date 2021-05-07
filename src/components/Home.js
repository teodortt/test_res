import { Menu, Button, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import React from 'react';

const { SubMenu } = Menu;

const CardsRed = () => (
    <Col span={8}>
        <Card title="Card title" bordered={false} style={{ background: 'red' }}>
            <img style={{ width: '100px' }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        </Card>
    </Col>
)
const Cards = () => (
    <Col span={8}>
        <Card title="Card title" bordered={false} >
            <img style={{ width: '100px' }}
                alt="example"
                src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
            />
        </Card>
    </Col>
)
// const CardsBlue = () => (
//     <Col span={8}>
//         <Card title="Card title" bordered={false} >
//             <img style={{ width: '100px' }}
//                 alt="example"
//                 src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
//             />
//         </Card>
//     </Col>
// )

const Home = () => {

    const [collapsed, setCollapsed] = React.useState('true');
    const [count, setCount] = React.useState(1);


    return (
        <div style={{ height: '200vh' }}>

            <div className="sidebar" style={{ marginTop: '100px', width: "50%" }}>
                <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>

                <Menu
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
          </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
          </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Option 3
          </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>

            </div>

            <div className="container">

                <input onChange={() => { setCount(count + 1) }} type="text" />

                <div className="site-card-wrapper">
                    <Row gutter={16}>


                        {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
                        {[...Array(count)].filter((items, idx) => idx % 3 === 2).map((_, i) => <CardsRed key={i} />)}
                        {[...Array(count)].filter((items, idx) => idx % 3 === 1).map((_, i) => <Cards key={i} />)}
                        {[...Array(count)].filter((items, idx) => idx % 3 === 0).map((_, i) => <Cards key={i} />)}

                    </Row>
                </div>

            </div>

            <style jsx>{`
            @media only screen and (max-width: 600px) {

            .sidebar{
                display:none;
            }

        }
            `}</style>
        </div>
    )
}
export default Home