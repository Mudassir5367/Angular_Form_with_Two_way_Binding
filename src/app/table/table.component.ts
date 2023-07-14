import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from '../Model';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 
  @Output() parentComponent:EventEmitter<any> =new EventEmitter;
  @Input() parentToChild: any;
  // queryData:any[] = []

  formArr: any[] = [];
  fNameValid:boolean = false;
  lNameValid:boolean = false;
  selectValid:boolean = false;
  religionValid:boolean = false;
  dateValid:boolean = false;
  boxValid:boolean = false;
  showTable:boolean = false;
  form:any;
  
  
  formData:IForm = {
    id:0,
    fname:'',
    lname:'',
    select:'',
    religion:'',
    date:'',
    box:false,

  }

 
  
  constructor(
    private router:Router, 
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    ) { }

   remove(element: any){
     this.formArr.forEach((value,index) => {
       if(value == element)
       this.formArr.splice(index,1);
     });
   }

   // from table to form
   negateToForm(arr:any){
    this.router.navigate([''],{queryParams: {negateToForm: JSON.stringify(arr)}})
   }
  




  
   
  ngOnInit(): void {


    // Get request 
    // this.requestService.getData().subscribe(data=>{
    //   console.log('Get: ', data);
    //   this.formArr = data;
    // })


   


    // LocalStorage

    // let formData = JSON.parse(localStorage.getItem('formData') as '[]');
    // this.formArr = formData;
    //  console.log('formArr-HHHH: ', this.formArr);


    // Params

    // this.activatedRoute.queryParams.subscribe((params:any)=>{
    //   console.log('params: ', params);
    //   this.formArr.push(JSON.parse(params.practice))
    // });



  //   this.route.queryParams
  //   .subscribe((params:any) => {
  //     console.log('params: ', params);
  //     this.formArr.push(JSON.parse(params.mudasir))
  //   }
  // );
    

    this.parentComponent.emit(this.formData)
  }


  
 
 


}
