import React, { Component } from 'react';
import styles from './index.css'
import { Select, Modal, Button, Input, Radio  } from 'antd';
const { Option } = Select;

class user extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal1Visible: false,
            modal2Visible: false,
            value: 1
         };
    }

    onChange = e => {
        this.setState({
          value: e.target.value
        });
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    
    render() {
        return (
            <div>
                <div className={styles.userContainer}>
                    <p className={styles.userType}>
                        <span className={styles.typePeople}>用户类型</span>
                        <Select defaultValue="lucy" style={{ width: 200 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">请选择分类</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </p>
                    <Button onClick={() => this.setModal2Visible(true)}>+增加</Button>
                    <Modal
                        title="添加"
                        centered
                        visible={this.state.modal2Visible}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                        className={styles.userWrapper}
                        >
                        <p><span>用户名</span><Input placeholder="请输入用户名"/></p>
                        <p><span>用户名密码</span><Input disabled placeholder="123456"/></p>
                        <p>
                            <span>用户类型</span>
                            <Select defaultValue="lucy" style={{ width: 500 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">请选择分类</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </p>
                        <p>
                            <span>部门</span>
                            <Select defaultValue="lucy" style={{ width: 500 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">请选择分类</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </p>
                        <p>
                            <span>角色</span>
                            <Select defaultValue="lucy" style={{ width: 500 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">请选择分类</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </p>
                        <div className={styles.statusUser}>
                            <span className={styles.userSpan}>用户状态</span>
                            <Radio.Group onChange={this.onChange} value={this.state.value} >
                                <Radio value={1}>可用</Radio>
                                <Radio value={2}>不可用</Radio>
                            </Radio.Group>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default user;