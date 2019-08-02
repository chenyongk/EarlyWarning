import React, { Component } from 'react';
import styles from './index.css'
import {connect} from 'dva'
import { Icon, Pagination, Tabs  } from 'antd';
import Monitor from '../../components/monitor/searchlist'
import Info_search from '../../components/InfoSearch'
import Axios from 'axios'

const { TabPane } = Tabs;

class info_search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pageSize: 10,
            currentPage: 1,
            list:[]
         }
         this.onPageChange = (page) => {
            this.setState({
                currentPage: page
            })
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type:'EventAnalysis/getData'
        })
    }

    render() {
        let list = this.props.EventAnalysis.value && this.props.EventAnalysis.value.list;
        return (
            <div>
                <Info_search></Info_search>
                <div className={styles['tabs-container']}>
                    <Tabs defaultActiveKey="1" className={styles.containerTabs}>
                        <TabPane tab="信息" key="1">
                            <div className={styles.tabTitle}>
                                <span>埃塞俄比亚坠机</span>
                                <div className={styles.tabcon}>
                                    <p><Icon type="eye" className={styles.tabicon} />已关注</p>
                                    <p><Icon type="security-scan" className={styles.tabicon} />分析</p>
                                    <p><Icon type="usb" className={styles.tabicon} />关联</p>
                                </div>
                            </div>
                            <div className={styles.listShow}>
                                <span>列表展示</span>
                                <span>总数：{list && list.length}</span>
                            </div>
                            {list && list.slice((this.state.currentPage-1)*this.state.pageSize,this.state.currentPage*this.state.pageSize).map(item => (
                                <div className={styles.Tabsguid} key={item.guid}>
                                    <h3>{item.title}</h3>
                                    <p>
                                        <span>时间：{item.time}</span>
                                        <span>来源：{item.source}</span>
                                    </p>
                                    <p>
                                        <span>{item.country}</span>
                                        <span>{item.thing}</span>
                                    </p>
                                </div>
                            ))}
                            <Pagination 
                                hideOnSinglePage={false}
                                total={list && list.length}
                                pageSize={this.state.pageSize}
                                onChange={this.onPageChange}
                                style={{margin:"0 auto"}}
                                />
                        </TabPane>
                        <TabPane tab="账号" key="2">
                            <Monitor name={'账号'}></Monitor>
                        </TabPane>
                        <TabPane tab="群组" key="3">
                            <Monitor name={'群组'}></Monitor>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default connect(state => ({...state}))(info_search);