import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: ListUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
