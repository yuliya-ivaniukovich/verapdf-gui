import { createAction, handleActions } from 'redux-actions';
import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { ajax } from '../../api/api';

// - Actions
export const profileActions = {
    loadProfiles: createAction('PROFILES_LOAD_REQUEST'),
    loadProfilesSuccess: createAction('PROFILES_LOAD_SUCCESS'),
    loadProfilesFailed: createAction('POFILES_LOAD_FAILED')
}

// - State
const initialState = {
    values: null,
    isLoading: false,
    isLoaded: false,
    error: false
}

// - Reducer
export default handleActions({
    PROFILES_LOAD_REQUEST: state => ({
        ...state,
        isLoading: true
    }),
    PROFILES_LOAD_SUCCESS: (state,action) => ({
        ...state,
        values: action.payload,
        isLoading: false,
        isLoaded: true
    }),
    PROFILES_LOAD_FAILED: state => ({
        ...state,
        error: true
    })
}, initialState);

// - Epiics
const getProfilesEpic = action$ => action$.pipe(
    ofType('PROFILES_LOAD_REQUEST'),
    mergeMap(action => from(ajax.get('api/vera/profiles'))
        .pipe(
            map(response => profileActions.loadProfilesSuccess(response)),
            catchError(error => of(profileActions.loadProfilesFailed(error)))
        )
    )
)

export const profilesEpics = combineEpics(
    getProfilesEpic
)