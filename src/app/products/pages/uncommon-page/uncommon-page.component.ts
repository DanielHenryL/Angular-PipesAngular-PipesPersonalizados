import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
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

  // i18nPlural

  public clients:string[] = ['Yosi','Thiago','Daniel','Freddy','Lourdes']
  public clientsMap = {
    '=0':', no tenemos ningun cliente',
    '=1':' tenemos un cliente',
    'other':' tenemos # clientes',
  }
  deleteClient(){
    this.clients.shift()
  }
}
