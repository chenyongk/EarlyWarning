import React, { Component } from 'react';
import { connect } from 'dva';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let { num } = this.props.List;
        return (
            <div>
                {num}
                <button onClick={() => this.props.dispatch({
                    type:'List/changeNum'
                })}>add</button>
            </div>
        );
    }
}

export default connect(state => {
    return {...state}
})(List);