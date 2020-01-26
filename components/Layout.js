import React from 'react';
import Head from 'next/head';
import { Layout, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

export const CustomLayout = (props) => (
    <Layout style={{ background: `${props.background}` }}>
        <Head>
            <title>Dynamic JSON Form Render With Antd</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.9.3/introjs.css" rel="stylesheet" />
        </Head>
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%', background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)', padding: '0 16px 0 20px'
        }}
        >
            <Row>
                <Col xs={4}>
                    {props.logo}
                </Col>
                <Col xs={16} />
                <Col xs={4} />
            </Row>
        </Header>
        <Content style={{ padding: '0 40px', marginTop: 100, minHeight: '83vh' }}>
            {props.children}
        </Content>
        <Footer style={{ textAlign: 'center', background: `${props.background}` }}>
            This is a awesome layout
            </Footer>
    </Layout>
)
