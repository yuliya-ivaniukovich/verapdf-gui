import {combineReducers} from 'redux';
import validation from './validation';
import policy from './policy';
import features from './features';
import featuresValues from './featuresValues';

export default combineReducers({
    validation,
    policy,
    features,
    featuresValues
});