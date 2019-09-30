import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';



const routes: Routes = [
  {component: LifeCycleHookComponent , path:'lsh'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
