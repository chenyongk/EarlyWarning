import React, { Component } from 'react';
import styles from './index.css';
import { connect } from 'dva';
import TheMap from '../components/theMap/index'
import TheLinebar from '../components/theLinebar/index'
import TheType from '../components/theType/index'
import CountUp from 'react-countup'

import { Icon } from 'antd';
import axios from 'axios'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }
  componentDidMount() {  
    this.props.dispatch({ type: 'List/changeNum' });
  }
  handleClick = () => {
    this.props.dispatch({ type: 'List/changeNum' });
  }
  render() {
    return (
      <div className={styles.wrap}>
        <ul className={styles.ul}>
          {this.props.List.value && this.props.List.value.list.map((item, index) => (
            <li key={index} className={styles.li}>
              <div className={styles.sBox}>
                <p className={styles.bbox}><span className={styles.number}> <CountUp end={item.number} duration={6}></CountUp></span><span className={styles.title}>{item.title}</span>  </p>
                <span className={styles.allNum}>全部数据量</span>
              </div>
              <p className={styles.today}>今日数据量<CountUp end={item.todayData} duration={6}></CountUp></p>
            </li>
          ))}
        </ul>
        <div className={styles.wrap_bottom}>
          <div className={styles.childOne}>
            <div className={styles.oneTitle}>
              突发事件地图
                    </div>
            <div className={styles.oneContent}>
              <TheMap params={this.handleClick}></TheMap>
            </div>
          </div>
          <div className={styles.childOne}>
            <div className={styles.special}>
              {/* <div className={styles.con}>
                实时数据
                </div> */}
                <div className={styles.tab}>
                  <div className={styles.commentHeader}>
                      <b>实时数据</b>
                      <div style={{display:'flex',width:150,justifyContent:'space-between'}}>
                          <span className={!this.state.flag?styles.active:''}
                              onClick={() => (this.setState({flag:false}))}
                          >突发事件</span>
                          <span className={this.state.flag?styles.active:''}
                              onClick={() => (this.setState({flag:true}))}
                          >热点事件</span>
                      </div>
                  </div>
                  {!this.state.flag && <div className={styles.commentTab}>
                      {this.props.List.value && this.props.List.value.tabOne.map((item,index) => (
                        <p key={index}>
                          <span>
                            <Icon type={item.type} style={{background:'skyblue',color:'#fff',width:'30px',height:'30px',
                            lineHeight:'30px',textAlign:'center',marginRight:'10px'
                          }}/>
                          {item.title}
                          </span>
                          <span>{item.time}</span>
                        </p>
                      ))}
                  </div>}
                  {this.state.flag && <div className={styles.commentTab}>
                      22
                  </div>}
                </div> 
            </div>
            <div className={styles.oneContent}></div>
          </div>
          <div className={styles.childOne}>
            <div className={styles.oneTitle}>
              采集量趋势
                        </div>
            <div className={styles.oneContent}>
              <TheLinebar></TheLinebar>
            </div>
          </div>
          <div className={styles.childOne}>
            <div className={styles.oneTitle}>
              时间类型
                      </div>
            <div className={styles.oneContent}>
              <TheType></TheType>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({...state}))(Index);


