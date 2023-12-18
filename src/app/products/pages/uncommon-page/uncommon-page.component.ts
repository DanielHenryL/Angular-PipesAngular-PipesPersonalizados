import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  // KeyValue
  public person = {
    name:'Daniel',
    age:26,
    address:'Peru, lima'
  }
  //async
  public myObsevableTimer:Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:',value ))
  )
  public promiseValue:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
      console.log( 'Tenemos data de la promesa' );
      this.person.name = 'Henry'
    }, 4000);
  })
}
