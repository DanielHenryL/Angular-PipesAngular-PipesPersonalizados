import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  public name :string = 'Daniel';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }
  changeClient(){
    this.name = this.name === 'Daniel' ? 'Daniela' : 'Daniel';
    this.gender = this.gender === 'male' ? 'female':'male';
  }
}
