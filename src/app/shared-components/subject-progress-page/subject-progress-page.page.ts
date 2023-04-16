import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



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

  subject: string  = 'Laboratorio 1'
  carreer: string = 'TSDS'
  total_clases: number = 35
  total_d_clases: number = 10
  total_a_clases: number = 8
  percentage: number = (this.total_a_clases/this.total_d_clases)*100
  activity: Activity[] = [
    {date: '04/04/2023', hours: '1:25'}, {date: '05/04/2023', hours: '2:00'},{date: '06/04/2023', hours: '1:35'},
  ]  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome(){
    this.router.navigateByUrl('/dashboard')
  }

}
