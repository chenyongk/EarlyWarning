import React, { Component } from 'react';
import styles from './index.css';
import { Tabs, Input } from 'antd';

const { TabPane} = Tabs;
const { Search } = Input;
class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles.group}>
                <Tabs type="card">
                    <TabPane tab="群组信息" key="1">
                        <div className={styles.selection}>
                            群组筛选<input type="text"/>
                        </div>
                        <div className={styles.search}>
                            Search <Search
                            placeholder=""
                            onSearch={value => console.log(value)}
                            style={{ width: 150 }}
                            />
                        </div>
                        <ul className={styles.count}>
                                <li>群组名称<span>↑↓</span></li>
                                <li>群组分类<span>↑↓</span></li>
                                <li>群组头像<span>↑↓</span></li>
                                <li>群组成员<span>↑↓</span></li>
                            </ul>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Group;