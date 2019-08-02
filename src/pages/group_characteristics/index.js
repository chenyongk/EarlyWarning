import React, { Component } from 'react';
import styles from './index.css'
import { Icon } from 'antd';
import Header_select from '../../components/header_select/index'
import Huoyue from '../../components/huoyue/index'
import Insert from '../../components/insert/index'
import Settings from '../../components/settings/index'
import People from '../../components/People/index'
class group_characteristics extends Component {
    render() {
        return (
            <div>
                <h3 className={styles.title}>群组特征</h3>
                <Header_select></Header_select>
                <div className={styles['group-characteristics-box']}>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>活跃度</h4>
                        <Huoyue></Huoyue>
                    </div>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>信息发布量</h4>
                        <Insert></Insert>
                    </div>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>内容偏好</h4>
                        <Settings></Settings>
                    </div>
                    <div className={styles.group_characteristics_huoyue}>
                        <h4><Icon type='home' className={styles.group_characteristics_huoyue_icon}/>群内人数</h4>
                        <People></People>
                    </div>
                </div>
            </div>
        );
    }
}

export default group_characteristics;