import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { EmployeesState } from 'src/app/reducers/employees/employees.state';
import { EmployeesListRequestAction } from 'src/app/reducers/employees/actions/employees-list-request.action';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-entity-component',
  templateUrl: './entity-component.component.html',
  styleUrls: ['./entity-component.component.less']
})
export class EntityComponentComponent implements OnInit, OnDestroy {
  private subscriptions = Array<Subscription>();
  private employeesState = this.store.select<EmployeesState>(appState => appState.employees);
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new EmployeesListRequestAction({offset:0, top: 10}));

    this.subscriptions.push(
      this.employeesState.subscribe(x => console.log(x)),
    );
  }

  public employeesInprogress$: Observable<boolean> = this.employeesState.pipe(
    map(state => state.inprogress)
  );

  public employeesItems$: Observable<Array<Employee>> = this.employeesState.pipe(
    map(
      state => state.response.list
    )
  );

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
