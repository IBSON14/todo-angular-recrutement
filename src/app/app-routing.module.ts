import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      pageTitle: 'app.title',
    },
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      pageTitle: 'app.title',
    },
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      pageTitle: 'app.title',
    },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      pageTitle: 'app.title',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
