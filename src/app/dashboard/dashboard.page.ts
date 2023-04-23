import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.interface';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser, selectSubjects, selectAttendance } from '../state/app.state';
import { UserService } from '../services/user.service';
import { getAttendance } from '../state/actions/user.actions';
import { Attendance } from '../models/attendance.interface';

interface ShowSubject {
  id: number,
  title: string,
  total_hours: number,
  img: string,
  value?: string,
  percentage?: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  date = new Date()
  token!: string
  hideHeader: boolean = false
  user: User =  {
    id: 0,
    last_name: "",
    name: "",
    cuil: "",
    dir: "",
    phone_number: "",
    birthdate: "01/01/1990",
    age: 32,
    email: "mail@mail.com",
    user_name: "",
    pass: "",
    role: "",
    file_number: "123"
  }

  subjects: ShowSubject[] = []

  attendance: Attendance[] = []

  recentActivity = [
    {
    subj: "Matematica",
    time: "01:32"
    },
    {
      subj: "Laboratorio 1",
      time: "02:32"
    },
    {
      subj: "Ingles 1",
      time: "00:32"
    },
  ]



  constructor(
    private store   : Store,
    private users   : UserService,
    private router  : Router
    ) { }

  ngOnInit() {
    let time = new Date()
    
    this.store.select(selectUser).subscribe(user => {this.user = user!});
    this.store.select(selectSubjects).subscribe(subjects => {
      for (let i = 0; i < subjects.length; i++) {
        const e = subjects[i];
        let mat = {
          id: e!.materia_id,
          title: e!.materia_name,
          total_hours:150,
          img: "../../assets/images/code.png",
        }
        this.subjects.push(mat)
      }

    })
  }

  slidesOptions = {
    slidesPerView: 1.3,
  }

  seeProgress(id_mat: number) {
    let id_materia = id_mat
    this.router.navigate(['/dashboard/subject-progress-page', id_materia])
  }

  seeProgressGoBack() {
    this.router.navigateByUrl('/dashboard')
  }


}
