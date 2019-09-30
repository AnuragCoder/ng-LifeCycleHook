import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { NgonchangesParentComponent } from './ngonchanges-parent/ngonchanges-parent.component';
import { NgonchangesChildComponent } from './ngonchanges-child/ngonchanges-child.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHookComponent,
    NgonchangesParentComponent,
    NgonchangesChildComponent,
    EmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
