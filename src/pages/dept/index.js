import React, { Component } from 'react';
import styles from './index.css'
import { Select, Modal, Button, Input, Table, Radio  } from 'antd';
const { Option } = Select;

const dataSource = [

];
  
  const columns = [
    {
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '上级名称',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '序号',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'dot',
        key: 'dot',
    }
  ];
  
  

class log extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal1Visible: false,
            modal2Visible: false,
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
                <div className={styles.deptTop}>
                    <div></div>
                    <Modal
                        title="添加"
                        centered
                        visible={this.state.modal2Visible}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                        className={styles.userWrapper}
                        >
                        <div className={styles.statusUser}>
                            <span className={styles.userSpan}>部门名称</span>
                            <Radio.Group onChange={this.onChange} value={this.state.value} >
                                <Radio value={1}>一级部门</Radio>
                                <Radio value={2}>二级部门</Radio>
                            </Radio.Group>
                        </div>
                        <p><span>部门名称</span><Input placeholder="请输入部门名称"/></p>
                        <p><span>序号</span><Input  placeholder="请输入部门名称"/></p>
                        <p>
                            <span>所属上级部门</span>
                            <Select defaultValue="lucy" style={{ width: 500 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">请选择分类</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </p>
                    </Modal>
                    <Button onClick={() => this.setModal2Visible(true)}>+增加</Button>
                </div>
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        )
    }
}

export default log;