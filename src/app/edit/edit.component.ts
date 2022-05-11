import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../login/todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id = localStorage.getItem('User-id');
  token = localStorage.getItem('User-token');
  todo!: Todo
  idTodo!: number;

  addForm = new FormGroup({
    todo_id: new FormControl(''),
    todo_label: new FormControl(''),
    todo_is_done: new FormControl(''),
  });
  constructor(private http:HttpClient, private router:Router, private activatedRoute: ActivatedRoute
    ) { 
      this.idTodo = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    }

  ngOnInit(): void {
    this.addForm.setValue({todo_id:this.idTodo, todo_label:'', todo_is_done:''})
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
