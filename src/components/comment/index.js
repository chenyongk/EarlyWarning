import React, { Component } from 'react';
import { Tabs, Pagination, Progress, Icon, Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <Comment
                    author={<b>Han Solo</b>}
                    avatar={
                    <Avatar>{this.props.name}</Avatar>
                    }
                    content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                    }
                    datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                    }
                />
            </>
        );
    }
}

export default index;