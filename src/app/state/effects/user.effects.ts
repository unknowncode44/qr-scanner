import { Injectable }   from "@angular/core";
import { Router }       from "@angular/router";

// ngrx & rxjs
import { Actions, concatLatestFrom, createEffect, ofType}   from '@ngrx/effects';
import { map, tap, of, switchMap, exhaustMap }              from "rxjs";
import { Store }                                            from "@ngrx/store";

// app state
import { UserState } from "../reducers/user.reducer";

// state actions
import * as AuthActions         from "../actions/auth.actions";
import * as UserActions         from "../actions/user.actions";
import * as AttendanceActions   from "../actions/attendance.actions";
import * as SubjectActions      from "../actions/subject.actions";

// services
import { UserService } from "src/app/services/user.service";
import { SubjectExtended } from "src/app/models/subject.model";


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
                if((res.role == 'TEACHER')||(res.role == 'ADMIN')||(res.role == 'SUSER')){
                    this.router.navigateByUrl('/teacher-dashboard');
                    AuthActions.loading({loading: false});
                }
                else {
                    this.router.navigateByUrl('/dashboard');
                    AuthActions.loading({loading: false});
                }
            }, 5);
            
        }),
        switchMap((t) => of(
            AuthActions.loading({loading: false})
        ))

    ))
    
    //! quitar
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
    //!

    getExtendedSubjects$ = createEffect(() => 
    this.actions$.pipe(
        ofType(UserActions.setUser),
        map((action) => action.user.id),
        exhaustMap((id: number) => this.userService.getSubjects(id.toString()).pipe(
            switchMap((res: any) => of(
                SubjectActions.loadSubjects({sbj: res.result})
            ))
        ))
        
    ))

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