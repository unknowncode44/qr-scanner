import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, mergeMap, tap, of, switchMap, exhaustMap, Observable, merge, concatMap } from "rxjs";
import * as AuthActions from "../actions/auth.actions";
import * as UserActions from "../actions/user.actions";
import * as AttendanceActions from "../actions/attendance.actions";
import { UserService } from "src/app/services/user.service";
import { Subject } from "src/app/models/subject.model";
import { Attendance } from "src/app/models/attendance.interface";
import { Store } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";
import { AttendanceState } from "../reducers/attendance.reducer";
import { selectSubjects } from "../app.state";

@Injectable()
export class UserEffects {

    

    loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        switchMap((res) => of(
            UserActions.setUser({user: res.user}),
            UserActions.setRole({role: res.user.role}),
        )),
    ), {dispatch: true}
    );

    navigate$ = createEffect(() => 
    this.actions$.pipe(
        ofType(UserActions.setRole),
        tap((res) => {
            setTimeout(() => {
                if((res.role == 'TEACHER')||(res.role == 'ADMIN')){
                    this.router.navigateByUrl('/teacher-dashboard');
                    AuthActions.loading({loading: false});
                }
                else {
                    this.router.navigateByUrl('/dashboard');
                    AuthActions.loading({loading: false});
                }
            }, 500);
            
        }),
        switchMap((t) => of(
            AuthActions.loading({loading: false})
        ))

    ))

    getSubjects$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActions.setUser),
            map((action) => action.user.id),
            exhaustMap((id: number) => this.userService.getSubjects(id.toString()).pipe(
                switchMap((res: any) => of(
                    UserActions.getSubjects({subjects: res.result})
                ))
            ))
        )
    )

    getAllAttendances$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActions.setUser),
            map(action => action.user.id),
            exhaustMap((id: number) => this.userService.getAttendance(id.toString()).pipe(
                switchMap((res: any) => of(
                    AttendanceActions.loadAttendances({atte: res.result})
                ))
            ))
        ))

    constructor(
        private userService: UserService,
        private actions$: Actions,
        private router: Router,
        private store: Store<UserState>
    
        ) {

        }

        date = new Date()

}