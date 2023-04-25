import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'src/app/models/subject.model';
import { selectUser } from 'src/app/state/app.state';
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
  activity: Activity[] = [
    {date: '04/04/2023', hours: '1:25'}, {date: '05/04/2023', hours: '2:00'},{date: '06/04/2023', hours: '1:35'},
  ]
  

  constructor(
    private router: Router, 
    private readonly store: Store, 
    private route: ActivatedRoute, 
    private userService: UserService
    ) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe(
      user => this.userId = user?.id.toString()!
    )
    this.sub = this.route.params.subscribe( params => {
      this.subject_id = +params['id']
      console.warn(this.subject_id);
    })
  }

  backToHome(){
    this.router.navigateByUrl('/dashboard')
  }

}
