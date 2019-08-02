import React, { Component } from 'react';
import styles from './index.css';
import { Layout, Menu, Icon, Input, Badge, Avatar, Select  } from 'antd';
import Link from 'umi/link';
import intl from 'react-intl-universal';
import locales from '../locales'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;

class BasicLayout extends Component {
  constructor() {
    super()
    intl.init({currentLocale:'zhcn',locales})
  }
  state = {
    collapsed: false,
    flag:false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className={styles.wrapper}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div style={{color:"#fff",height:'60px',lineHeight:'60px',fontSize:'20px',textAlign:'center'}}>
          {!this.state.collapsed && <span>{intl.get('system')}</span>}
          <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
          />
        </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
            <Menu.Item key="1">
              <Link to='/'><Icon type="user" />
              <span>
                {intl.get('situation')}
              </span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/event_analysis'><Icon type="video-camera" />
              <span>{intl.get('monitoring')}</span></Link>
            </Menu.Item>
            <SubMenu
              key="3"
              title={
                <span>
                  <Icon type="setting" />
                  <span>{intl.get('groupMonitoring')}</span>
                </span>
              }
            >
              <Menu.Item key="9"><Link to='/account_behavior'>账号行为</Link></Menu.Item>
              <Menu.Item key="10"><Link to='/group_characteristics'>群组特征</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
              <Link to='/entity_relationship'><Icon type="video-camera" />
              <span>{intl.get('correlationAnalysis')}</span></Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='/info_search'><Icon type="video-camera" />
              <span>{intl.get('monitoringConfiguration')}</span></Link>
            </Menu.Item>
            <SubMenu
              key="6"
              title={
                <span>
                  <Icon type="setting" />
                  <span>{intl.get('collectconfiguration')}</span>
                </span>
              }
            >
              <Menu.Item key="11"><Link to='/account'>账号管理</Link></Menu.Item>
              <Menu.Item key="12"><Link to='/group'>群组管理</Link></Menu.Item>
              <Menu.Item key="13"><Link to='/key_word'>采集关键词</Link></Menu.Item>
              <Menu.Item key="14"><Link to='/operation'>运行监控</Link></Menu.Item>
              <Menu.Item key="15"><Link to='/assist_group'>辅助加群</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="7"
              title={
                <span>
                  <Icon type="setting" />
                  <span>{intl.get('systemAdministrator')}</span>
                </span>
              }
            >
              <Menu.Item key="16"><Link to='/user'>用户管理</Link></Menu.Item>
              <Menu.Item key="17"><Link to='/dept'>部门管理</Link></Menu.Item>
              <Menu.Item key="18"><Link to='/role'>角色管理</Link></Menu.Item>
              <Menu.Item key="19"><Link to='/function'>功能管理</Link></Menu.Item>
              <Menu.Item key="20"><Link to='/log'>操作日志</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <div></div>
            <div className={styles.headerRight}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <Avatar size="large" icon="user" />
              <Select defaultValue="中文" style={{ width: 120 }}>
                <Option value="英文" onClick={() => {
                  this.handleClick('enus')
                }}
                >英文</Option>
                <Option value="中文" onClick={() => {
                  this.handleClick('zhcn')
                }}>
                中文</Option>
              </Select>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#eee',
              minHeight: 280,
              marginTop:60
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
  handleClick = (old) => {
    this.setState({
      flag:true
    })
    intl.init({currentLocale:old,locales})
  }
}

export default BasicLayout;
