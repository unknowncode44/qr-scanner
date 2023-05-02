import { createAction, props }                          from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate }   from '@ngrx/entity';
import { User } from '../../models/user.interface'

export const loadStudents   = createAction('[Students/API] Load Students', props<{ students: User[]}>())
export const addStudents    = createAction('[Students/API] Add Students ', props<{ students: User[]}>())
export const addStudent     = createAction('[Students/API] Add Student'  , props<{ student : User  }>())

