import { handleActions } from 'redux-actions';

//state
const initialState = [
    'auto-detect',
    'custom',
    'pdf/a-1a',
    'pdf/a-1b',
    'pdf/a-2a',
    'pdf/a-2b',
    'pdf/a-2u',
    'pdf/a-3a',
    'pdf/a-3b',
    'pdf/a-3u'
];

//reducer
export default handleActions({}, initialState);
