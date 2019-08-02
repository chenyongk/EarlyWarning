import React, { Component } from 'react';
import styles from './index.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className={styles.header}>
                    <Tabs type="card" className={styles.stab}>
                        <TabPane tab="WhatApp监控账户信息" key="1">
                        <ul className={styles.count}>
                                <li>账户<span>↑↓</span></li>
                                <li>最近登录信息<span>↑↓</span></li>
                                <li>登录状态<span>↑↓</span></li>
                                <li>群组列表<span>↑↓</span></li>
                            </ul>
                        </TabPane>
                        <TabPane tab="用户信息" key="2">
                        <ul className={styles.count}>
                                <li>群组内用户<span>↑↓</span></li>
                                <li>头像<span>↑↓</span></li>
                                <li>最近发言时间<span>↑↓</span></li>
                                <li>用户加入的群组<span>↑↓</span></li>
                            </ul>
                        </TabPane>
                    </Tabs>
                </div>

            </div>
        );
    }
}

export default Account;