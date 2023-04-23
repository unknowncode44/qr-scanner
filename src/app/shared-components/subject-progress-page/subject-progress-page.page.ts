import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'src/app/models/subject.model';
import { selectAttendance, selectSubjects } from 'src/app/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from 'src/app/models/attendance.interface';



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

  subject_id?: number;
  private sub?: any 

  subject: string  = 'Laboratorio 1'
  carreer: string = 'TSDS'
  total_clases: number = 35
  total_d_clases: number = 10
  total_a_clases: number = 8
  percentage: number = (this.total_a_clases/this.total_d_clases)*100
  activity: Activity[] = [
    {date: '04/04/2023', hours: '1:25'}, {date: '05/04/2023', hours: '2:00'},{date: '06/04/2023', hours: '1:35'},
  ]  

  constructor(private router: Router, private readonly store: Store, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.subject_id = +params['id']
      console.warn(this.subject_id);
      
    })
    this.store.select(selectSubjects).subscribe(subjets => {
      for (let i = 0; i < subjets.length; i++) {
        const e = subjets[i];
        if(e != null ){
          this.subjects.push(e)
        }
      }
    })
    this.store.select(selectAttendance).subscribe( attendance => { 
      for (let i = 0; i < attendance.length; i++) {
        const e = attendance[i];
        if(e?.materia_id === this.subject_id) {
          this.attendances.push(e!)
        }
      }
      console.warn(this.attendances);
      
    })
    
  }

  backToHome(){
    this.router.navigateByUrl('/dashboard')
  }

}
