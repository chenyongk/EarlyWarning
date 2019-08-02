import React, { Component } from 'react';
import styles from './searchlist.css';
import {connect} from 'dva';
import { Pagination, Icon } from 'antd';

class search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pageSize: 9,
            currentPage: 1,
        };
        this.onPageChange = (page) => {
            this.setState({
                currentPage: page
            })
        };
    }
    render() {
        let {name} =this.props
        let list = this.props.Monitor.value && this.props.Monitor.value.list;
        return ( 
            <>
                <div className={styles.tabHeader}>
                    <span style={{marginRight:300}}>{name}</span>
                    <span>相关描述</span>
                </div>
                <div className={styles.tabCon}>
                    {list && list.slice((this.state.currentPage-1)*this.state.pageSize,this.state.currentPage*this.state.pageSize).map(item => (
                        <p key={item.guid}>
                            <b>{item.name}</b>
                            <span style={{display:'inline-block',width:400,marginRight:100}}>{item.title}</span>
                            <span className={styles.tabcon}>
                                {/* eye-invisible */}
                                <i onClick={
                                    () => this.clickOpen(item.guid)
                                }><Icon type={item.boolean?'eye':'eye-invisible'} className={styles.tabicon}/>{item.boolean?'已关注':'未关注'}</i>
                                <i><Icon type="security-scan" className={styles.tabicon} />分析</i>
                                <i><Icon type="usb" className={styles.tabicon} />关联</i>
                            </span>
                        </p>
                    ))}
                    <Pagination 
                        hideOnSinglePage={false}
                        total={list && list.length}
                        pageSize={this.state.pageSize}
                        onChange={this.onPageChange}
                        style={{margin:"0 auto"}}
                    />
                </div>
            </>
        );
    }
    componentDidMount() {
        this.props.dispatch({
            type:'Monitor/getData'
        })
    }
    clickOpen=(value) => {
        this.props.dispatch({
            type:'Monitor/setData',
            value
        })
    }
}

export default connect(state => ({...state}))(search);