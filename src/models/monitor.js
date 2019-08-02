import axios from 'axios';
export default {
    namespace: 'Monitor',
    state: {
        data:[]
    },
    effects: {
        *getData({},{put,call}) {
            let res = yield call(axios.get,'http://169.254.213.123:7001/monitor')
            yield put({
                type: 'monitorData',
                value: res.data
            })
        },
        *setData({value},{put}) {
            yield put({
                type: 'setMonitorData',
                value
            })
        }
    },
    reducers: {
        monitorData(state, {value}) {
            return {...state,value}
        },
        setMonitorData(state, {value}) {
            state.value.list.filter(item =>item.guid == value)[0].boolean = !state.value.list.filter(item =>item.guid == value)[0].boolean
            return {...state}
        }
    }
}