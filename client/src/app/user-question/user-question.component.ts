import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../login/login.service';


@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrl: './user-question.component.css'
})
 

export class UserQuestionComponent implements OnInit {

   queryData:any

   result:any=[]
    
   count:any

   subject:any

   question:any

   name=this.userName.username;

   comment:any

   id:any

   date:any

   dd:any

   mm:any

    

  constructor(public policyQuery: AuthService, public userName: UserService){};

 

  ngOnInit(): void {

    this.getquery();
  }

  getquestion(){

    this.result=this.queryData.filter((obj:any) => {

      return obj.name===this.name
    })

    console.log("this the objects of user",this.result);


  }


  getquery() {

    this.policyQuery.getquery().subscribe(response => {

      this.queryData = response; 
      this.count= this.queryData.length;
      this.getquestion()

    },
      (error) => {
        console.log("error while fecthing data from server");
      })

  }

getdate(){

  let date = new Date();
console.log(date);

let dd:any= date.getDate();
let mm:any= date.getMonth() + 1;

let yyyy = date.getFullYear();

if (dd < 10) {
	dd = '0' + dd;
}
if (mm < 10) {
	mm = '0' + mm;
}
this.date = dd + '/' + mm + '/' + yyyy;

console.log(date);


}

  postquery(){

    this.getdate()

    let data={

      id:this.count+1,
      name:this.name,
      question:this.subject,
      comment:this.comment,
      date:this.date

    }

    this.policyQuery.postquery(data).subscribe(response =>{

      this.getquery()
      this.subject=null;


    })
  }
}


