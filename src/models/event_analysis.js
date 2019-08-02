import axios from 'axios';
export default {
    namespace: 'EventAnalysis',
    state: {
        
    },
    effects: {
        *getData({},{put,call}) {
            let res = yield call(axios.get,'http://169.254.213.123:7001/event_analysis')
            yield put({
                type: 'eventAnalysisData',
                value: res.data
            })
        }
    },
    reducers: {
        eventAnalysisData(state, {value}) {
            return {...state,value}
        }
    }
}