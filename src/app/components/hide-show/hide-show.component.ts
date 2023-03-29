import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.scss'],
})
export class HideShowComponent  implements OnInit {

  showPassword = false

  @ContentChild(IonInput) input!: IonInput

  constructor() { }

  ngOnInit() {}

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

}
