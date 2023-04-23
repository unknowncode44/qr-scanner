import { createAction, props } from "@ngrx/store";
import { create } from "domain";
import { Attendance } from "src/app/models/attendance.interface";
import { Subject } from "src/app/models/subject.model";
import { User } from "src/app/models/user.interface";

//para obtener el usuario
export const setUser = createAction(
    '[User] Set User',
    props<{ user: User }>()
);

//para obtener el rol
export const setRole = createAction(
    '[User] Set Role',
    props<{ role: string }>()
);

//para obtener el materias
export const getSubjects = createAction(
    '[User] Get Subjects',
    props<{ subjects: Subject[] }>()
);

//para obtener la asistencia
export const getAttendance = createAction(
    '[User] Get Attendance',
    props<{attendance: any[]}>()
)