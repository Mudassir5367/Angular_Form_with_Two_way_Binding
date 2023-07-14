import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from "../Model"
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() ChildToParent:EventEmitter<any> = new EventEmitter

  postId: any;
  

  formArr: any[] = [];
  fNameValid:boolean = false;
  lNameValid:boolean = false;
  selectValid:boolean = false;
  religionValid:boolean = false;
  dateValid:boolean = false;
  boxValid:boolean = false;


  formData:IForm = {
     id: 0,
    fname: '',
    lname: '',
    select: '',
    religion: '',
    date: '',
    box: false,
  }
 
  
  
  
  constructor(
    private router:Router, 
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private http: HttpClient
    ) { }
//from table to form
  ngOnInit(): void {
    // this.requestService.getData().subscribe(data=>{
    //   console.log('data: ', data);

    // })


     
// query params

    // this.activatedRoute.queryParams.subscribe((params:any)=>{
    //   if(params.negateToForm != null){
    //     this.formData = JSON.parse(params.negateToForm)
    //   }
    // });
    this.getData();
  }







  getData(){
    // Get Request
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(result=>{
      console.log('Get: ', result);

    })
    // Post Request
    this.http.post('https://jsonplaceholder.typicode.com/posts',{value:'786786'}).subscribe(result=>{
      console.log('Post: ', result);

    })
    // Put Request
    // this.http.put('https://jsonplaceholder.typicode.com/posts',this.formData).subscribe(result => this.formData = result.id);
 
    // Delete Request
    // this.http.delete('https://jsonplaceholder.typicode.com/posts')
    //     .subscribe(() => this.status = 'Delete successful');
        
        
    // Validation

    if(this.formData && this.formData.fname ===''){
      this.fNameValid = true;
    }
    else if(this.formData && this.formData.fname && this.formData.fname?.length > 0){
      this.fNameValid = false;
    }


    if(this.formData && this.formData.lname ==='')
    {
      this.lNameValid = true;
    }
    else if(this.formData && this.formData.lname && this.formData.lname)
    {
      this.lNameValid = false;
    }


    if(this.formData && this.formData.select ==='')
    {
      this.selectValid = true;
    }
    else if(this.formData && this.formData.select && this.formData.select)
    {
      this.selectValid = false;
    }


    if(this.formData && this.formData.religion ==='')
    {
      this.religionValid = true;
    }
    else if(this.formData && this.formData.religion && this.formData.religion)
    {
      this.religionValid = false;
    }


    if(this.formData && this.formData.date ==='')
    {
      this.dateValid = true;
    }
    else if(this.formData && this.formData.date && this.formData.date)
    {
      this.dateValid = false;
    }


    if(this.formData && this.formData.box === false)
    {
      this.boxValid = true;
    }
    else if(this.formData && this.formData.box && this.formData.box)
    {
      this.boxValid = false;
    }
    
   // this.formArr.push(data)
    console.log('formArr: ', this.formArr);
    this.ChildToParent.emit(this.formArr);


  }
  
  submit(){

    // LocalStorage

    // let formData = JSON.parse(localStorage.getItem('formData') as '[]');
    // if(formData && formData.length > 0){
    //   formData.push(this.formData);
    //   localStorage.setItem('formData',JSON.stringify(formData));
    // } else {
    //   let arr: any = [];
    //   arr.push(this.formData);
    //   console.log("VVVVV", arr);
    //   localStorage.setItem('formData',JSON.stringify(arr))
    // }
    this.router.navigate(['app-table']);
   }
    
     
    
     


  // Routing

  // negateToTable(){
    
  //   this.router.navigate(['app-table'],{queryParams: {practice: JSON.stringify(this.formData)}})
  // }

  // navigateToTable(){
  //   this.router.navigate(['app-table'], {queryParams: {mudasir: JSON.stringify(this.formData)}})
  // }


}
