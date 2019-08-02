import React, { Component } from 'react';
import HeaderSelect from '../../components/header_select/index';
import { connect } from 'dva'
import { Tabs, Pagination, Progress, Icon } from 'antd';
import styles from './index.css';
import Charspan from '../../components/charSpan/index';
import Comment from '../../components/comment/index'
const { TabPane } = Tabs;
class EventAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            currentPage: 1,
            circle: [{
                precent:Math.ceil(Math.random()*100),
                describe:'一般',
                color:'yellow'
            },{
                precent:Math.ceil(Math.random()*100),
                describe:'正面',
                color:'blue'
            },{
                precent:Math.ceil(Math.random()*100),
                describe:'负面',
                color:'red'
            }],
            flag: false
        };
        this.onPageChange = (page) => {
            this.setState({
                currentPage: page
            })
        };
    }

    componentDidMount() {
        this.props.dispatch({
            type:'EventAnalysis/getData'
        });
    }

    render() {
        let list = this.props.EventAnalysis.value && this.props.EventAnalysis.value.list;
        return (
            <>
                <HeaderSelect></HeaderSelect>
                <div>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="监测结果" key="1">
                            <div className={styles.listShow}>
                                <span>列表展示</span>
                                <span>总数：{list && list.length}</span>
                            </div>
                            {list && list.slice((this.state.currentPage-1)*this.state.pageSize,this.state.currentPage*this.state.pageSize).map(item => (
                                <div key={item.guid}>
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
                        <TabPane tab="监测分析" key="2">
                            <div className={styles.mood}>
                                <div className={styles.moodContent}>
                                    <p>
                                        <b>情绪增量</b>
                                        <span onClick={this.reloadNum}>
                                            <Icon type="redo" />Reload
                                        </span>
                                    </p>
                                    <div className={styles.moodCircle}>
                                        {this.state.circle.map((item,index) => (
                                            <span key={index}>
                                                <Progress type="circle" percent={item.precent} width={80} strokeColor={item.color}/>
                                                <p>{item.describe}<Icon type="arrow-right" /></p>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.moodContent}>
                                    <p>
                                        <b>情绪趋势</b>
                                        <span>
                                        近一周观点趋势...
                                        </span>
                                    </p>
                                    <div className={styles.moodCircle}>
                                        <span>d</span>
                                        <Charspan></Charspan>
                                        
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.comment}>
                                <div className={styles.commentHeader}>
                                    <b>主要观点</b>
                                    <div style={{display:'flex',width:150,justifyContent:'space-between'}}>
                                        <span className={!this.state.flag?styles.active:''}
                                            onClick={() => (this.setState({flag:false}))}
                                        >Telegram</span>
                                        <span className={this.state.flag?styles.active:''}
                                            onClick={() => (this.setState({flag:true}))}
                                        >WhatsApp</span>
                                    </div>
                                </div>
                                {!this.state.flag && <div className={styles.commentTab}>
                                    {[1,2,3,4].map(item => {
                                        return <Comment key={item} name={'U'}/>
                                    })}
                                </div>}
                                {this.state.flag && <div className={styles.commentTab}>
                                    {[1,2,3,4].map(item => {
                                        return <Comment key={item} name={'App'}/>
                                    })}
                                </div>}
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </>
        );
    }
    reloadNum = () => {
        this.setState({
            circle: [{
                precent:Math.ceil(Math.random()*100),
                describe:'一般',
                color:'yellow'
            },{
                precent:Math.ceil(Math.random()*100),
                describe:'正面',
                color:'blue'
            },{
                precent:Math.ceil(Math.random()*100),
                describe:'负面',
                color:'red'
            }]
        })
    }
    
}

export default connect(state => ({...state}))(EventAnalysis);