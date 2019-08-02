import React, { Component } from 'react';
import { Modal, Button, Input, Table  } from 'antd';
import styles from './index.css'
const dataSource = [

];
  
  const columns = [
    {
      title: '角色名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '角色功能',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '操作',
      dataIndex: 'address',
      key: 'address',
    }
  ];

class role extends Component {
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
                        <p><span>角色名称</span><Input placeholder="请输入角色名称"/></p>
                        <p><span>角色功能</span><a href='#'>全部功能</a></p>
                    </Modal>
                    <Button onClick={() => this.setModal2Visible(true)}>+增加</Button>
                </div>
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        );
    }
}

export default role;