import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/UserList/UserList.page'
import { UserPage } from './pages/User/User.pages';
import { LoginPage } from './pages/Login/Login.page'
import { RegisterPage } from './pages/Register/Register.page'
import { error404 } from './pages/error404/error404.page'
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirecLogin = redirectUnauthorizedTo(['login']);

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'userlist', component: UserListPage, ...canActivate(redirecLogin) },
  { path: 'user', component: UserPage, ...canActivate(redirecLogin) },
  { path: 'user/:id', component: UserPage, ...canActivate(redirecLogin) },
  { path: '**', component: error404 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
