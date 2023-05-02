import { EntityAdapter, EntityState, createEntityAdapter }      from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';
import * as StudentActions from '../actions/student.actions'

