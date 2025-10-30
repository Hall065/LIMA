import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile2Component } from './profile2/profile2.component';

const routes: Routes = [
  { path: 'profile2', component: Profile2Component },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
