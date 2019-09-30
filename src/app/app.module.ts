import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { NgonchangesParentComponent } from './ngonchanges-parent/ngonchanges-parent.component';
import { NgonchangesChildComponent } from './ngonchanges-child/ngonchanges-child.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { MenuForNavService } from './service/menu-for-nav.service';



@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHookComponent,
    NgonchangesChildComponent,
    NgonchangesParentComponent,
    
    EmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MenuForNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
