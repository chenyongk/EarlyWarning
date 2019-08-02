import React, { Component } from 'react';
import styles from './index.css'
import { Link } from 'react-router-dom'
import { Select, Icon } from 'antd';
const { Option  } = Select;


class HeaderSelect extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        
    }

    render() {
        return (
                <div className={styles.event_analysisBox_header}>
                    <div>
                    <div><Icon type="home" className={styles.home} /> 埃塞尔比亚坠机 </div>
                    <div className={styles.SelectBox}>
                        <Select defaultValue="lucy" className={styles.selectBox_select} style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">全部账号</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">全部群组</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div></div>
                    <div>
                    <div className={styles.selectBox_con} >
                        <Select defaultValue="lucy" className={styles.selectBox_con_select}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">更多</Option>
                        </Select>
                        <Link to="/monito_management"><button className={styles.btn}>监测管理</button></Link>    
                    </div></div>
                </div>
        );
    }
}

export default HeaderSelect;