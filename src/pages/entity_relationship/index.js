import React, { Component } from 'react';
import HeaderSelect from '../../components/header_select/index'
import styles from './index.css'
import TheCharts from '../../components/theCharts/index'
class EntityRelationship extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className={styles.wrap}>
                    <div className={styles.header}>
                        关联分析
                    </div>
                    <HeaderSelect></HeaderSelect>
                    <TheCharts></TheCharts>
                </div>

            </>
        );
    }
}

export default EntityRelationship;