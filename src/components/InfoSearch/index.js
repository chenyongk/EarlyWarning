import React, { Component } from 'react';
import styles from './index.css'
import { Select, Icon, DatePicker,  Input, Button  } from 'antd';
const { Option } = Select;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flag:false
         };
    }
    render() {
        return (
            <div className={styles.collapses}>
                    <div className={styles.collapsePage} >
                        <Icon type={this.state.flag?'up':'down'} className={styles.downA} onClick={() => { this.setState({ flag:!this.state.flag }) }}/>
                        <div className={styles.SelectInput}>
                            <Input placeholder="请输入关键字" className={styles.inputcon} />
                            <Button className={styles.Selectsearch}>搜索</Button>
                            <Button className={styles.selectGuanli}>监测管理</Button>
                        </div>
                    </div>
                    {
                        this.state.flag&&
                        <div className={styles.selectContainer} >
                            <div className={styles.SelectContent}>
                                <div className={styles.SelectName}>
                                    <span>通道:</span>
                                    <Select defaultValue="lucy" style={{ width: 200 }}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className={styles.SelectData}>
                                    <span>开始日期:</span>
                                    <DatePicker/>
                                        <span>结束日期:</span>
                                    <DatePicker/>
                                </div>
                            </div>
                            <div>
                                <span>标签:</span>
                                <Select defaultValue="lucy" className={styles.selectOption}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                        </div>
                    }
                </div>
        );
    }
}

export default index;