import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from "./auth.guard";
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard], },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard], },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },
  { path: 'add-note', component: CreateNoteComponent, canActivate: [AuthGuard] },
  { path: 'edit-note/:id', component: CreateNoteComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
