import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { StudentService } from 'src/app/services/student.service';

interface Options {
  title: string,
  logo: string
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  seeAll: boolean = false

  options: Options[] = [
    {
      title: 'Estudiantes',
      logo: 'people-outline'
    },
    {
      title: 'Profesores',
      logo: 'people-circle-outline'
    },
    {
      title: 'Materias',
      logo: 'easel-outline'
    },
    {
      title: 'Carreras',
      logo: 'ribbon-outline'
    },
    {
      title: 'Asistencia',
      logo: 'hand-right-outline'
    }
  ]

  filterArgs: Options = {title: '', logo:''}


  constructor(private servEx: StudentService) { }

  ngOnInit() {
    this.servEx.getStudents().subscribe(
      (res) => {
        console.log(res.result);
        
      }
    )
  }

  filterOption(obj: Options){
    this.seeAll = true; 
    this.filterArgs = {title: obj.title, logo: obj.logo}
  }

  restore(){
   this.seeAll = false; 
   this.filterArgs = {title: '', logo:''}
   this.options = [
      {
        title: 'Estudiantes',
        logo: 'people-outline'
      },
      {
        title: 'Profesores',
        logo: 'people-circle-outline'
      },
      {
        title: 'Materias',
        logo: 'easel-outline'
      },
      {
        title: 'Carreras',
        logo: 'ribbon-outline'
      },
      {
        title: 'Asistencia',
        logo: 'hand-right-outline'
      }
    ]
  }

}
