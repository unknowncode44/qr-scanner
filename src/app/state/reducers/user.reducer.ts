import { createReducer, on }                from '@ngrx/store';
import * as UserActions                     from '../actions/user.actions';
import { User }                             from 'src/app/models/user.interface';
import { Subject } from 'src/app/models/subject.model';

// USER STATE
export interface UserState {
    user    : User | null,
    role    : string | null,
    subjects : Subject[] | null[]
  
}

// USER INITIAL STATE
export const userInitialState: UserState  = {
    user    : null,
    role    : null,
    subjects : [] 
}

// USER REDUCER
export const userReducer = createReducer(
    userInitialState,
    on(UserActions.setUser,         (state, { user })           : UserState =>({ ...state, user })),
    on(UserActions.setRole,         (state, { role })           : UserState =>({ ...state, role })),
    on(UserActions.getSubjects,     (state, { subjects })       : UserState =>({...state, subjects}))
)