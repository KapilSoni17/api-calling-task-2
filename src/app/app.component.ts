import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskapii';
  page:string ="home-page";
  response:string | undefined;
  categories:string | undefined;
  dataset = [];
  res: any;
  constructor(private serviceService: ServiceService) {
  }
  getApi(){
    this.serviceService.getApi().subscribe((res)=>{
      console.warn(res);
      this.response=res?.categories;
    }
    )
  }


}
