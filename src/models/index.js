import axios from 'axios';
export default {
    namespace: 'List',
    state: {
        
    },
    effects: {
        *changeNum({},{put, call}) {
            let res = yield call(axios.get,'http://169.254.213.123:7001/index');
            yield put({
                type:'add',
                value:res.data
            })
        }
    },
    reducers: {
        add(state, {value}) {
            return {...state,value}
        }
    }
}