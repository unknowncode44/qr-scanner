import { EntityAdapter, EntityState, createEntityAdapter }      from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store';
import { Attendance }       from 'src/app/models/attendance.interface'
import * as AtteActions from '../actions/attendance.actions'

export interface AttendanceState extends EntityState<Attendance> {
    selectedAttendanceId: string | null;
}


export function selectAttendanceId(a: Attendance): string{
    return a.attendance_id.toString()
}

export function sortAttendanceByName(a: Attendance, b: Attendance): number {
    return a.attendance_date.localeCompare(b.attendance_date)
}

export const attendanceAdapter: EntityAdapter<Attendance> = createEntityAdapter<Attendance>({
    selectId    : selectAttendanceId,
    sortComparer: sortAttendanceByName
})

export const attendanceInitialState: AttendanceState = attendanceAdapter.getInitialState({
    selectedAttendanceId: null
})

export const attendanceReducer = createReducer(
    attendanceInitialState,
    on(AtteActions.loadAttendances, (state, { atte }) => { return attendanceAdapter.setAll( atte, state ) }),
    on(AtteActions.setAttendances , (state, { atte }) => { return attendanceAdapter.addMany(atte, state ) }),
    on(AtteActions.setAttendance  , (state, { atte }) => { return attendanceAdapter.setOne( atte, state ) }),
    on(AtteActions.addAttendance  , (state, { atte }) => { return attendanceAdapter.addOne( atte, state ) })
)

export const getSelectedAtteId = (state: AttendanceState) => state.selectedAttendanceId;

const {selectIds, selectEntities, selectAll, selectTotal} = attendanceAdapter.getSelectors();

export const selectAttendanceIds    = selectIds;
export const selectUserEntities     = selectEntities;
export const selectAllAttendances   = selectAll;
export const selectAttendancesTotal = selectTotal;





