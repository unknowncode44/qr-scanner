import { createAction, props }                          from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate }   from '@ngrx/entity';
import { Attendance }                                   from 'src/app/models/attendance.interface';

export const loadAttendances    = createAction('[Attendance/API] Load Attendances'  , props<{ atte: Attendance[] }>());
export const setAttendances     = createAction('[Attendance/API] Set Attendances'   , props<{ atte: Attendance[] }>());
export const addAttendance      = createAction('[Attendance/API] Add Attendance'    , props<{ atte: Attendance   }>());
export const setAttendance      = createAction('[Attendance/API] Set Attendance'    , props<{ atte: Attendance   }>());
export const upsertAttendances  = createAction('[Attendance/API] Usert Attendance'  , props<{ atte: Attendance   }>())
export const addAttendances     = createAction('[Attendance/API] Add Attendances'   , props<{ atte: Attendance[] }>())
export const upsertAttendance   = createAction('[Attendance/API] Upsert Attendances', props<{ atte: Attendance[] }>())
