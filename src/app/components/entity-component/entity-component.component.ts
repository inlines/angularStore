import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/reducers/employees/employees.state';
import { EmployeesListRequestAction } from 'src/app/reducers/employees/actions/employees-list-request.action';
import { DepartmentsState } from 'src/app/reducers/departments/departments.state';
import { Subscription } from 'rxjs';
import { DepartmentsListRequestAction } from 'src/app/reducers/departments/actions/departments-list-request.action';

@Component({
  selector: 'app-entity-component',
  templateUrl: './entity-component.component.html',
  styleUrls: ['./entity-component.component.less']
})
export class EntityComponentComponent implements OnInit, OnDestroy {
  private subscriptions = Array<Subscription>();
  private employeesState = this.store.select<EmployeesState>(appState => appState.employees);
  private departmentsState = this.store.select<DepartmentsState>(appState => appState.departments);
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new EmployeesListRequestAction({offset:0, top: 10}));

    this.subscriptions.push(
      this.departmentsState.subscribe(x => console.log(x)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
