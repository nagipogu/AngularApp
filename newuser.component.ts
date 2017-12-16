import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  userList: User[]=[];
  
  addUser(form){
	  var user:User;
	  user=form.value;
	  this.userList.push(user);
  }
  constructor() { }

  ngOnInit() {
  }

}
