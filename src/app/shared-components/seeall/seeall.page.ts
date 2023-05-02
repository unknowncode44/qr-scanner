import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Attendance } from 'src/app/models/attendance.interface';
import { SubjectExtended } from 'src/app/models/subject.model';
import { selectAllAttendances } from 'src/app/state/app.state';
import { selectAllSubjects } from 'src/app/state/app.state';



@Component({
  selector: 'app-seeall',
  templateUrl: './seeall.page.html',
  styleUrls: ['./seeall.page.scss'],
})
export class SeeallPage implements OnInit {

  private sub?: any
  public attArray: Attendance[] = []

  public activityTitle: string = 'Mi Actividad'

  private attendances: Attendance[] = []
  private subjects: SubjectExtended[] = []
  constructor(
    private readonly store: Store,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.select(selectAllAttendances).subscribe((res) => {
      this.attendances = res
    });

    
    
    this.sub = this.route.params.subscribe(
      (params) => {
        this.attArray = []
        if(params != null){
          this.attendances.forEach((att) => {
            if(att.materia_id.toString() === params['id']){
              this.activityTitle = att.materia_name
              this.attArray.push(att)
            }
          })
        }
        else {
          this.attArray = this.attendances
        }

      }
    )

    this.attArray = this.attendances

    this.store.select(selectAllSubjects).subscribe((res) => {
      this.subjects = res
    });
  }

  backToHome(){
    this.store.select(selectAllSubjects).subscribe()
    this.router.navigateByUrl('/dashboard')
  }

  filter(){}

}
