import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'src/app/models/subject.model';
import { selectAllAttendances, selectSubjects, selectUser } from 'src/app/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from 'src/app/models/attendance.interface';
import { UserService } from 'src/app/services/user.service';




interface Activity {
  date: string,
  hours: string
}
@Component({
  selector: 'app-subject-progress-page',
  templateUrl: './subject-progress-page.page.html',
  styleUrls: ['./subject-progress-page.page.scss'],
  

})
export class SubjectProgressPagePage implements OnInit {

  subjects: Subject[] = []
  attendances: Attendance[] = []

  userId: string = ''

  subject_id?: number;
  private sub?: any 

  subject: string  = 'Laboratorio 1'
  carreer: string = 'TSDS'
  total_clases: number = 35
  total_d_clases: number = 10
  total_a_clases: number = 8
  percentage: number = (this.total_a_clases/this.total_d_clases)*100
  activity: Activity[] = []
  

  constructor(
    private router: Router, 
    private readonly store: Store, 
    private route: ActivatedRoute, 
    private userService: UserService
    ) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe(
      user => this.userId = user?.id.toString()!
    ).unsubscribe()

    this.sub = this.route.params.subscribe( params => {
      this.subject_id = +params['id']
    }).unsubscribe()
    
    this.store.select(selectAllAttendances).subscribe(
      atte => {
        for (let i = 0; i < atte.length; i++) {
          const e = atte[i];
          if(e.materia_id === this.subject_id){
            this.attendances.push(e)
            let act = {date: e.attendance_date, hours: "2:00"}
            if(this.activity.length <= 3){
              this.activity.push(act)
            }
          }
        }

      }
    ).unsubscribe()
    
    if(this.attendances.length > 0) {
      let subj = this.attendances[0];
      this.subject = subj.materia_name;
      this.total_clases = subj.total_classes;
      this.total_d_clases = subj.classes_quantity;
      this.total_a_clases = this.attendances.length
      this.percentage = (this.total_a_clases/this.total_d_clases)*100
    }
    else {
      this.store.select(selectSubjects).subscribe(
        sjs => {
          for (let i = 0; i < sjs.length; i++) {
            const e = sjs[i];
            if(this.subject_id === e?.materia_id){
              this.subject = e!.materia_name
              // TODO: agregar clases totales en subjects
              this.total_clases = 20;
              this.total_a_clases = 0;
              this.total_d_clases = 0;
              this.percentage = (this.total_a_clases/this.total_d_clases)*100
            }
            
          }
        }
      ).unsubscribe()
    }
    


    
  }

  seeAll(){
    console.log(this.subject_id);
    
    this.router.navigate(['/subject-progress-page/seeall', this.subject_id])
  }

  backToHome(){
    this.store.select(selectSubjects).subscribe()
    this.router.navigateByUrl('/dashboard')
  }

}
