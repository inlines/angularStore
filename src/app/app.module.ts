import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { departmentsReducer } from './reducers/departments/departments.reducer';
import { employeesReducer } from './reducers/employees/employees.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentsEffects } from './effects/departments.effects';
import { EmployeesEffects } from './effects/employees.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormKeyService } from './services/fom-key.service';
import { HttpParamsService } from './services/http-params.service';
import { ParamsBracketService } from './services/params-bracket.service';
import { MockLoggerService } from './services/mock-logger.service';
import { environment } from 'src/environments/environment.prod';
import { interceptors } from './interceptors';
import { MockRequestGuardService } from './services/mock-request-guard.service';
import { DepartmentsMockData } from './mock-data/departments-mock-data.service';
import { EmployeesMockData } from './mock-data/employee-mock-data.service';
import { EntityComponentComponent } from './components/entity-component/entity-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({
      departments: departmentsReducer,
      employees: employeesReducer,
    }),
    EffectsModule.forRoot([
      EmployeesEffects,
      DepartmentsEffects,
    ]
    ),
    HttpClientModule
  ],
  providers: [
    FormKeyService,
    HttpParamsService,
    ParamsBracketService,
    environment.production ? [] : [
      ...interceptors,
      MockLoggerService,
      MockRequestGuardService,
      DepartmentsMockData,
      EmployeesMockData,
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
