import { EmployeeListInterceptor } from "./employee-list.interceptor";
import { DepartmentsListInterceptor } from "./departments-list.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


const interceptors = [];

[
  EmployeeListInterceptor,
  DepartmentsListInterceptor
]
.forEach(interceptor => {
  interceptors.push({
    provide: HTTP_INTERCEPTORS,
    useClass: interceptor,
    multi: true
  });
});

export { interceptors };