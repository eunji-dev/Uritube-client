import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import Youtube from './Youtube';
import CommentInCate from './CommentInCate';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const ReactHeader = props => {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="0">Uritube</Menu.Item>
            <Menu.Item key="1">title</Menu.Item>
            <Menu.Item key="2">nav 1</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span>subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span>subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0
              }}
            >
              <Row>
                <Col span={12}>
                  <Youtube videos={props.appVideos}></Youtube>
                </Col>
                <Col span={12}>
                  <CommentInCate />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default ReactHeader;
