import { Component } from '@angular/core';
import { NessusService } from './services/nessus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-security';
  constructor(private nessusService: NessusService){
    // this.nessusService.login().subscribe(e=>{
    //   console.log(e)
    // })
  }
}
