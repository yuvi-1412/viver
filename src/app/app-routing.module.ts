import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imported components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewSingleUserComponent } from './view-single-user/view-single-user.component';
import { ListResourcesColorComponent } from './list-resources-color/list-resources-color.component';
import { ViewSingleResourceComponent } from './view-single-resource/view-single-resource.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'users/edit/:id', component: EditUserComponent },
  { path: 'users/view/:id', component: ViewSingleUserComponent },
  { path: 'resources', component: ListResourcesColorComponent },
  { path: 'resources/view/:id', component: ViewSingleResourceComponent },
  // routes as needed
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' }, // Redirect to login for any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
