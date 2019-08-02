import React, { Component } from 'react';
import styles from './index.css'
import { Icon, Tabs } from 'antd';
import Header_select from '../../components/header_select/index'
import Account from '../../components/account/index'
import Settings from '../../components/settings/index'
import People from '../../components/People/index'
const { TabPane } = Tabs;


class account_behavior extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h3 className={styles.title}>账号行为</h3>
                <Header_select></Header_select>
                <div className={styles['group-characteristics-box']}>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>上线情况</h4>
                        <Account></Account>
                    </div>
                    <div className={styles.group_characteristics_huoyue}>
                        {/* <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>发言情况</h4> */}
                        <Tabs defaultActiveKey="1" className={styles.content}>
                            <TabPane className={styles.tabsTitle} tab="Tor" key="1">
                                Tor
                            </TabPane>
                            <TabPane className={styles.tabsTitle} tab="12P" key="2">
                                12P
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>内容偏好</h4>
                        <Settings></Settings>
                    </div>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>情感分析</h4>
                        <People></People>
                    </div>
                </div>
            </div>
        );
    }
}

export default account_behavior;