import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin-question',
  templateUrl: './admin-question.component.html',
  styleUrl: './admin-question.component.css'
})
 
export class AdminQuestionComponent implements OnInit {

  showform:any=false;
  
    queryData: any
  
    count: any
  
    subject: any
  
    question: any
  
    name: any
  
    comment: any
  
    id: any
  
    cdate: any
  
    date: any
  
    dd: any
    mm: any
  
    constructor(public policyQuery: AuthService) { }
  
    ngOnInit(): void {
  
      this.getquery()
  
      console.log(this.subject);
    }
  
  
    getquery() {
  
      this.policyQuery.getquery().subscribe(response => {
  
        this.queryData = response;
        console.log("query:", this.queryData);
        this.count = this.queryData.length;
        console.log(this.count);
  
      },
        (error) => {
          console.log("error while fecthing data from server");
        })
  
    }
  
    getdate() {
  
      let cdate = new Date();
      console.log(cdate);
  
      let dd: any = cdate.getDate();
      let mm: any = cdate.getMonth() + 1;
  
      let yyyy = cdate.getFullYear();
  
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      this.cdate = dd + '/' + mm + '/' + yyyy;
  
      console.log(cdate);
  
  
    }
  
    updatequery(query: any) {
  
     
  
      this.name = query.name;
      this.question = query.question;
      this.comment = query.comment;
      this.date = query.date;
      this.id = query.id;
  
      this.showform=true;
  
  
    }
  
  
    putquery() {
  
      this.getdate()
      
      let data: any = {
  
        id: this.id,
        name: this.name,
        question: this.question,
        comment: this.comment,
        cdate: this.cdate
  
      }
  
  
      this.policyQuery.putquery(data).subscribe(response => {
  
        this.getquery()
  
        this.showform=false;
  
  
      })
    }
  }