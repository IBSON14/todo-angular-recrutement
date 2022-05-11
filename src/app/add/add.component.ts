import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../login/todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id = localStorage.getItem('User-id');
  token = localStorage.getItem('User-token');
  todo!: Todo

  addForm = new FormGroup({
    todo_label: new FormControl(''),
    todo_is_done: new FormControl(''),
  });
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

  }
 

 onSubmit():void{
  const header = {
    'user-id': this.id!,
    'Authorization': 'Bearer '+this.token!,
    'Content-Type': 'application/json',

  }
  const options = {                                                                                                                                                                                 
    headers: new HttpHeaders(header), 
  };

  this.http.post<Todo>('https://test1.quadra-informatique.fr/api/todo', this.addForm.value, options).subscribe(
    response => {
      this.todo = response
      this.router.navigate(['/list'])

    }
  )
 }
}
