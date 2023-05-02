import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser, selectSubjects, selectAllSubjects } from '../state/app.state';
import { UserService } from '../services/user.service';
import { Attendance } from '../models/attendance.interface';
import { selectAllAttendances } from '../state/app.state';
import { IonicSlides } from '@ionic/angular';
import { SubjectExtended } from '../models/subject.model';
import { iconsArray } from '../helpers/icons-url';

interface ShowSubject {
  id: number,
  title: string,
  total_hours: number,
  img: string,
  value?: number,
  percentage?: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  swiperModules = [IonicSlides]

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

  sbjs: SubjectExtended[] = []

  attendance: Attendance[] = []

  recentActivity = [{subj: '', date: ''}] 


  constructor(
    private store   : Store,
    private users   : UserService,
    private router  : Router
    ) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {this.user = user!});
    this.store.select(selectAllAttendances).subscribe(
      attes => {
        this.recentActivity = []
        this.attendance = attes
        attes.sort(function(a,b){
          let str1 = a.attendance_date.split('/').reverse().join('')
          let str2 = b.attendance_date.split('/').reverse().join('')
          return str2.localeCompare(str1)
        })
        if(attes.length > 2){
          for (let i = 0; i < 3; i++) {
            const e = attes[i];
            let act = { subj: e.materia_name, date: e.attendance_date}
            this.recentActivity.push(act)
          }
        }
        else {
          for (let i = 0; i < attes.length; i++) {
            const e = attes[i];
            let act = { subj: e.materia_name, date: e.attendance_date}
            this.recentActivity.push(act)
            
          }
        }
      }
    )
    this.store.select(selectAllSubjects).subscribe((sbj) => {
      this.sbjs = sbj;
        for (let i = 0; i < this.sbjs.length; i++) {
          const e = this.sbjs[i];
          let mat = {
            id: e.materia_id,
            title: e.materia_name,
            total_hours: e.total_classes,
            img: this.getLogo(e.materia_name),
            value: (e.total_classes/e.classes_quantity)/100,
            percentage: ((e.total_classes/e.classes_quantity).toFixed(0)).toString()
          }
          this.subjects.push(mat)
        }
      }
    )
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

  seeAll() {
    this.router.navigateByUrl('/seeall')
  }

  getLogo(materia_name: string) : string{
    switch (materia_name) {
      case "Matematica I" || "Matematica II" || "Matematica III":
        return '../../assets/images/maths.png'
      case "Ingles I" || "Ingles II" || "Ingles III":  
        return '../../assets/images/language.png'
      case "Laboratorio I" || "Laboratorio II" || "Laboratorio III":  
        return '../../assets/images/tubes.png'  
      case "Etica" || "Innovacion" || "Gestion de Proyectos":
        return '../../assets/images/balance.png'
      default:
        return '../../assets/images/code.png'
    }
  }


}
