import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../login/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name = localStorage.getItem('User-name');
  id = localStorage.getItem('User-id');
  token = localStorage.getItem('User-token');
  todos!: Todo[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    const header = {
      'user-id': this.id!,
      'Authorization': 'Bearer '+this.token!,
      'Content-Type': 'application/json',

    }
    const options = {                                                                                                                                                                                 
      headers: new HttpHeaders(header), 
    };
 
  this.http.get<Todo[]>('https://test1.quadra-informatique.fr/api/todo/list', options).subscribe(
    response => this.todos = response
  )

  }

  delete(id:string){
    const header = {
      'user-id': this.id!,
      'Authorization': 'Bearer '+this.token!,
      'Content-Type': 'application/json',

    }
    const options = {                                                                                                                                                                                 
      headers: new HttpHeaders(header), 
    };
   if(confirm("Voulez vous supprimer le todo?")){
    this.http.delete('https://test1.quadra-informatique.fr/api/todo/'+id, options).subscribe(
      response => {
        console.log(response) 
        window.location.reload()
      }

    )
   }else{

   }
  }
deconnexion():void{
 localStorage.clear();
 this.router.navigate(['/'])
}

}
