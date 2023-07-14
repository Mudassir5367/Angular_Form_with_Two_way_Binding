import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dataRecieved: any;

  submit(event:any){
    console.log('event: ', event);
    this.dataRecieved = event;
  }

  constructor(private router: Router){

  }

  ngOnInit(){
    console.log('dataRecieved', this.dataRecieved);
    
  }

  navigateToForm(){
    this.router.navigate(['app-form'])
  }

  navigateToTable(){
    this.router.navigate(['app-table'])
  }

  // navigateToForm(){
  //   this.router.navigate(['app-form'])
  // }

  // navigateToTable(){
  //     this.router.navigate(['app-table'])
  // }

  
}


